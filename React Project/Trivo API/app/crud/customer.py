import math
from uuid import UUID

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import func, select
from app.crud.destination import get_destinations_by_ID, view_destination_images
from app.model.packages import Package
from app.model.user import User
from app.schema.customer import BookingCreate, ContactUsCreate, PackageReviewCreate, PackageReviewUpdate
from app.model.customer import Booking, ContactUs, Review
from fastapi import  HTTPException, status

async def view_customer_package(db:AsyncSession):
    data= await db.execute(select(Package).where(Package.active == True))
    packs = data.scalars().all()
    return packs

async def view_customer_package_detail(db:AsyncSession):
    data= await db.execute(select(Package).where(Package.active == True))
    packs = data.scalars().all()
    packages = []
    
    for p in packs:
        review = await get_review_package_id(p.id, db)
        review_data = []
        rating_sum = 0
        for r in review:
            r.customer = await db.execute(select(User).where(User.id==r.user_id))
            r.customer = r.customer.scalar_one_or_none()
            rating_sum += r.rating
            r={
                "user": r.customer.name,
                "rating": r.rating,
                "review": r.review,
                "created_at": r.created_at
            }
            review_data.append(r)
        b_count = await get_booking_count_pack(p.id, db)
        destinations = []
        for i in p.destination_ids:
            d = await get_destinations_by_ID(i, db)
            imgs = await view_destination_images(d.id, db)            
            destination_data = {
                "id": d.id,
                "name": d.name,  
                "slug:": d.nickname,
                "country": d.country,
                "city": d.city,
                "description": d.description,
                "images": imgs
            }   
            destinations.append(destination_data)

        items = {
            "id":p.id,
            "name":p.name,
            "packageName":p.name,
            "days" : p.days,
            "category":p.category,            
            "slug":p.name,            
            "description":p.description,
            "price":{
                "discount":10,
                "currency":"INR",
                "original":math.floor(p.price + (p.price%10)),
                "offer" : p.price
            },
            "bookingCount":b_count,
            "review":review_data,
            "rating": rating_sum / len(review) if review else 0,
            "totalReviews": len(review),
            "destination":destinations,
            "coverImage":p.coverImage,
            "highlights":p.highlights,
            "itinerary":p.itinerary,
            "inclusions":p.inclusions,
            "exclusions":p.exclusions,
            "hotel":p.hotel,
            "transport":p.transport,
            "cancellationPolicy": p.cancellationPolicy,
            "languages":p.languages,
            "maxGuests":p.maxGuests,
            "minimumAge":p.minimumAge,
            "meetingPoint":p.meetingPoint,
            "tourType":p.tourType,
            "status":p.active
        }
        packages.append(items)
    #     d_ids= p.destination_ids
        
    #     for i in d_ids:

    #     print(d_ids)
    return packages


async def book_package(data:BookingCreate, db:AsyncSession, payload:dict):   
   pack_data = await db.execute(select(Package).where(Package.id==data.package_id))
   pack = pack_data.scalar_one_or_none()
   if not pack:
       raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Package not valid")
   booking = data.model_dump()
   booking["customer_id"] = payload.get("id")
   booking["total_amount"] = pack.price * (data.number_of_adults + data.number_of_children)
   count = await db.execute(select(func.count(Booking.id)))
   total_booking = count.scalar() or 0
   next_booking = f"BK-{str(total_booking + 1).zfill(4)}"
   booking["booking_number"] = next_booking
   new_booking= Booking(**booking)
   db.add(new_booking)
   await db.commit()
   await db.refresh(new_booking)
   return new_booking


async def get_my_booking(db:AsyncSession, payload:dict):
    data = await db.execute(select(Booking).where(Booking.customer_id==payload.get("id")))
    packs = data.scalars().all()
    return packs

async def get_booking_count_pack(id:int, db:AsyncSession):
    data = await db.execute(select(func.count(Booking.id)).where(Booking.package_id==id))
    count = data.scalar() or 0
    return count

async def add_contact_us(data: ContactUsCreate, db:AsyncSession):
    new_contact = ContactUs(**data.dict())
    db.add(new_contact)
    await db.commit()
    await db.refresh(new_contact)
    return new_contact

async def add_review(review:PackageReviewCreate, db:AsyncSession):
    new_review = Review(**review.dict())
    db.add(new_review)
    await db.commit()
    await db.refresh(new_review)
    return new_review

async def get_all_review(db:AsyncSession):
    data = await db.execute(select(Review))
    return data.scalars().all()    

async def get_review_package_id(id:int, db:AsyncSession):
    data = await db.execute(select(Review).where(Review.package_id==id))
    reviews = data.scalars().all()
    return reviews  

async def update_review(id:UUID, update:PackageReviewUpdate, db:AsyncSession):
    data = await db.execute(select(Review).where(Review.id==id))
    review = data.scalar_one_or_none()
    if not review:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Package review not found")
    review.rating = update.rating
    review.review = update.review
    await db.commit()
    await db.refresh(review)
    return review

async def delete_review(id:UUID, db:AsyncSession):    
    data = await db.execute(select(Review).where(Review.id==id))
    review = data.scalar_one_or_none()
    if not review:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Package review not found") 
    review.active = False
    await db.commit()
    await db.refresh(review)
    return "removed"