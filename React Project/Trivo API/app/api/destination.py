from fastapi import APIRouter, HTTPException, status, Depends
from app.db.database import get_db
from app.schema.destination import CategoriesCreate, DestinationCreate, updateDestination
from sqlalchemy.ext.asyncio import AsyncSession
from app.crud.destination import add_destination_category, view_destination_category, add_destination, change_Destination, get_destinations

router = APIRouter()


@router.post("/addDestination")
async def addDestination(dest:DestinationCreate, db:AsyncSession=Depends(get_db)):
    return await add_destination(dest, db)


@router.get("/getDestination")
async def getDestinations(db:AsyncSession=Depends(get_db)):
    return await get_destinations(db)

@router.patch("/updateDestination")
async def updateDestination(id:int,dest:updateDestination, db:AsyncSession=Depends(get_db)):
    return await change_Destination(id, dest, db)

@router.post("/addDestinationCategory")
async def addDestinationCategory(cat:CategoriesCreate, db:AsyncSession=Depends(get_db)):
    return await add_destination_category(cat, db)

@router.get("/viewDestinationCategories")
async def ViewDestinationCategory( db:AsyncSession=Depends(get_db)):
    return await view_destination_category( db)