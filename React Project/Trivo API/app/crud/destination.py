from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy import select
from app.db.database import get_db
from app.schema.destination import CategoriesCreate, DestinationCreate, updateDestination
from app.model.destination import Category, Destination
from sqlalchemy.ext.asyncio import AsyncSession

async def add_destination(dest:DestinationCreate,db:AsyncSession):
    new_dest = Destination(**dest.dict())
    db.add(new_dest)
    await db.commit()
    await db.refresh(new_dest)
    return new_dest

async def get_destinations(db:AsyncSession):
    destinations = await db.execute(select(Destination))
    return destinations.scalars().all()

# disable_Destination, enable_Destination
async def disable_Destination(id:int, db:AsyncSession):
    data = await db.execute(select(Destination).where(Destination.id == id))
    destination = data.scalar_one_or_none()
    if not destination:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Destination not found")
    destination.active = False
    await db.commit()
    await db.refresh(destination)
    return destination    

async def enable_Destination(id:int, db:AsyncSession):
    data = await db.execute(select(Destination).where(Destination.id == id))
    destination = data.scalar_one_or_none()
    if not destination:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Destination not found")
    destination.active = True
    await db.commit()
    await db.refresh(destination)
    return destination    

async def change_Destination(id:int,dest:updateDestination, db:AsyncSession):
    data = await db.execute(select(Destination).where(Destination.id == id))
    destination = data.scalar_one_or_none()
    if not destination:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Destination not found")
    if dest.name:
        destination.name = dest.name
    if dest.nickname:
        destination.nickname = dest.nickname
    if dest.country:
        destination.country = dest.country
    if dest.city:
        destination.city = dest.city
    if dest.category_id:
        destination.category_id = dest.category_id
    if dest.description:
        destination.description = dest.description
    if dest.active:
        destination.active = dest.active
    await db.commit()
    await db.refresh(destination)
    return destination


async def add_destination_category(category:CategoriesCreate, db:AsyncSession):
    new_cat = Category(**category.dict())
    db.add(new_cat)
    await db.commit()
    await db.refresh(new_cat)
    return new_cat

async def view_destination_category(db:AsyncSession):
    data = await db.execute(select(Category))
    return data.scalars().all()