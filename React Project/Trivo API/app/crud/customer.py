import math
from uuid import UUID

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import func, select
from app.model.packages import Package
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
        items = {
            "id":p.id,
            "name":p.name,
            "days" : p.days,
            "category":p.category,
            "maxGuests":30,
            "minimumAge":1,
            "slug":p.name,
            "description":p.description,
            "price":{
                "discount":10,
                "currency":"INR",
                "original":math.floor(p.price + (p.price%10)),
                "offer" : p.price
            }

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