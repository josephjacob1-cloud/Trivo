from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import func, select
from app.model.packages import Package
from app.schema.customer import BookingCreate, ContactUsCreate
from app.model.customer import Booking, ContactUs
from fastapi import  HTTPException, status

async def view_customer_package(db:AsyncSession):
    data= await db.execute(select(Package).where(Package.active == True))
    packs = data.scalars().all()
    return packs


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