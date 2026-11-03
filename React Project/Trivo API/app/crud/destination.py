from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy import select
from app.db.database import get_db
from app.schema.destination import CategoriesCreate, DestinationCreate, updateDestination, DestinationImageCreate
from app.model.destination import Category, Destination, DestinationImage
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

async def get_destinations_by_ID(id:int,db:AsyncSession):
    destinations = await db.execute(select(Destination).where(Destination.id==id))
    return destinations.scalar()



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

async def add_destination_image(dest_image:DestinationImageCreate, db:AsyncSession):
    new_image = DestinationImage(**dest_image.dict())
    db.add(new_image)
    await db.commit()
    await db.refresh(new_image)
    return new_image

async def update_destination_image(id: int, dest_image:DestinationImageCreate, db:AsyncSession):
    data = await db.execute(select(DestinationImage).where(DestinationImage.id == id))
    image = data.scalar_one_or_none()
    if not image:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Destination image not found")
    if dest_image.image_url:
        image.image_url = dest_image.image_url
    if dest_image.alt_text:
        image.alt_text = dest_image.alt_text
    if dest_image.display_order:
        image.display_order = dest_image.display_order
    if dest_image.is_primary is not None:
        image.is_primary = dest_image.is_primary
    await db.commit()
    await db.refresh(image)
    return image

async def delete_destination_image(id: int, db:AsyncSession):
    data = await db.execute(select(DestinationImage).where(DestinationImage.id == id))
    image = data.scalar_one_or_none()
    if not image:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Destination image not found")
    await db.delete(image)
    await db.commit()
    return {"message": "Destination image deleted successfully"}

async def view_destination_images(destination_id: int, db:AsyncSession):
    data = await db.execute(select(DestinationImage).where(DestinationImage.destination_id == destination_id))
    return data.scalars().all()