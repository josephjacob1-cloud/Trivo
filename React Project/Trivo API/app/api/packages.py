from fastapi import APIRouter, HTTPException, status, Depends
from app.db.database import get_db
from sqlalchemy.ext.asyncio import AsyncSession
from app.schema.packages import PackageCategoryCreate, PackageCreate, PackageUpdate
from app.crud.packages import add_package_categories, get_package_categories, add_package, get_package, update_package, disable_package, enable_package

router = APIRouter()

@router.post("/addPackage")
async def addPackage(pack:PackageCreate, db:AsyncSession=Depends(get_db)):
    return await add_package(pack, db)

@router.get("/getPackages")
async def getPackages(db:AsyncSession=Depends(get_db)):
    return await get_package(db)

@router.patch("/updatePackage")
async def updatePackage(id:int, pack:PackageUpdate, db:AsyncSession=Depends(get_db)):
    return await update_package(id, pack, db)

@router.patch("/disablePackage")
async def disablePackage(id:int, db:AsyncSession=Depends(get_db)):
    return await disable_package(id, db)

@router.patch("/enablePackage")
async def enablePackage(id:int, db:AsyncSession=Depends(get_db)):
    return await enable_package(id, db)


@router.post("/addPackageCategories")
async def addPackageCategories(cat:PackageCategoryCreate, db:AsyncSession=Depends(get_db)):
    return await add_package_categories(cat, db)

@router.get("/getPackageCategories")
async def getPackageCategories(db:AsyncSession=Depends(get_db)):
    return await get_package_categories(db)
