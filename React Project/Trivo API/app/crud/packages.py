from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy import select
from app.db.database import get_db
from app.schema.packages import PackageCategoryCreate, PackageCreate, PackageUpdate
from app.model.packages import Package, PackageCategories
from sqlalchemy.ext.asyncio import AsyncSession


async def add_package(pack:PackageCreate, cover:str, db:AsyncSession):
    # packData = pack.model_dump()
    # packData["customer_id"] = cover
    new_pack = Package(
        name=pack.name,
        category = pack.category,
        days=pack.days,
        price=pack.price,
        destination_ids=pack.destination_ids,
        description=pack.description,
        active=pack.active,
        coverImage=cover
    )    
    print(new_pack)
    db.add(new_pack)
    await db.commit()
    await db.refresh(new_pack)
    return new_pack

async def get_package(db:AsyncSession):
    data = await db.execute(select(Package))
    return data.scalars().all()

async def update_package(id:int, pack:PackageUpdate,db:AsyncSession):
    data = await db.execute(select(Package).where(Package.id == id))
    package = data.scalar_one_or_none()
    if not package:
         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Package not found")  
    if pack.name:
        package.name = pack.name
    if pack.category:
        package.category = pack.category
    if pack.days:
        package.days = pack.days
    if pack.price:
        package.price = pack.price
    if pack.destination_ids:
        package.destination_ids = pack.destination_ids
    if pack.description:
        package.description = pack.description
    if pack.active:
        package.active = pack.active
    await db.commit()
    await db.refresh(package)
    return package

async def disable_package(id:int, db:AsyncSession):
    data = await db.execute(select(Package).where(Package.id == id))
    package = data.scalar_one_or_none()
    if not package:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Package not found")
    package.active = False
    await db.commit()
    await db.refresh(package)
    return package 

async def enable_package(id:int, db:AsyncSession):
    data = await db.execute(select(Package).where(Package.id == id))
    package = data.scalar_one_or_none()
    if not package:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Package not found")
    package.active = True
    await db.commit()
    await db.refresh(package)
    return package 

async def add_package_categories(categories:PackageCategoryCreate, db:AsyncSession):
    new_cat = PackageCategories(**categories.dict())
    db.add(new_cat)
    await db.commit()
    await db.refresh(new_cat)
    return new_cat

async def get_package_categories(db:AsyncSession):
    data = await db.execute(select(PackageCategories))
    return data.scalars().all()
