from fastapi import APIRouter, HTTPException, UploadFile, status, Depends
from fastapi.params import File
from app.core.config import UPLOAD_DIR_DESTINATION_IMAGES
from app.core.upload import imageUpload
from app.db.database import get_db
from app.schema.destination import CategoriesCreate, DestinationCreate, updateDestination, DestinationImageCreate, DestinationImagePropCreate
from sqlalchemy.ext.asyncio import AsyncSession
from app.crud.destination import add_destination_category, view_destination_category, add_destination, change_Destination, get_destinations, disable_Destination, enable_Destination, add_destination_image

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

@router.patch("/disableDestination")
async def disableDestination(id:int, db:AsyncSession=Depends(get_db)):
    return await disable_Destination(id, db)

@router.patch("/enableDestination")
async def enableDestination(id:int, db:AsyncSession=Depends(get_db)):
    return await enable_Destination(id, db)


@router.post("/addDestinationCategory")
async def addDestinationCategory(cat:CategoriesCreate, db:AsyncSession=Depends(get_db)):
    return await add_destination_category(cat, db)

@router.get("/viewDestinationCategories")
async def ViewDestinationCategory( db:AsyncSession=Depends(get_db)):
    return await view_destination_category( db)

@router.post("/addDestinationImage")
async def addDestinationImage(dest_image:DestinationImagePropCreate, db:AsyncSession=Depends(get_db), image: UploadFile = File(...)):
    img = imageUpload(image, UPLOAD_DIR_DESTINATION_IMAGES)
    print("Image uploaded successfully:", img)
    return await add_destination_image(DestinationImageCreate(
        destination_id=dest_image.destination_id,
        image_url=imageUpload(image, UPLOAD_DIR_DESTINATION_IMAGES),
        alt_text=dest_image.alt_text,
        display_order=dest_image.display_order,
        is_primary=dest_image.is_primary        
    ), db)