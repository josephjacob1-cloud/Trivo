from fastapi import APIRouter, Form, HTTPException, UploadFile, status, Depends
from fastapi.params import File
from app.core.config import UPLOAD_DIR_DESTINATION_IMAGES
from app.core.upload import imageUpload
from app.db.database import get_db
from app.schema.destination import CategoriesCreate, DestinationCreate, DestinationImageUpdate, updateDestination, DestinationImageCreate
from sqlalchemy.ext.asyncio import AsyncSession
from app.crud.destination import add_destination_category, view_destination_category, add_destination, change_Destination, get_destinations, disable_Destination, enable_Destination, add_destination_image, update_destination_image, delete_destination_image, view_destination_images

router = APIRouter()


@router.post("/addDestination")
async def addDestination(dest:DestinationCreate, db:AsyncSession=Depends(get_db)):
    return await add_destination(dest, db)


@router.get("/getDestination")
async def getDestinations(db:AsyncSession=Depends(get_db)):
    return await get_destinations(db)

@router.patch("/updateDestination/{id}")
async def updateDestination(id:int,dest:updateDestination, db:AsyncSession=Depends(get_db)):
    return await change_Destination(id, dest, db)

@router.patch("/disableDestination/{id}")
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
async def addDestinationImage(
    destination_id: int = Form(...),
    alt_text: str | None = Form(None),
    display_order: int = Form(1),
    is_primary: bool = Form(False),
    image: UploadFile = File(...),
    db: AsyncSession = Depends(get_db)
):
    img = imageUpload(image, UPLOAD_DIR_DESTINATION_IMAGES)

    return await add_destination_image(
        DestinationImageCreate(
            destination_id=destination_id,
            image_url=img,
            alt_text=alt_text,
            display_order=display_order,
            is_primary=is_primary
        ), db)

@router.put("/updateDestinationImage")
async def updateDestinationImage(id:int,
    alt_text: str | None = Form(None),
    display_order: int = Form(None),
    is_primary: bool = Form(None),
    image: UploadFile | None = File(None),
    db: AsyncSession = Depends(get_db)
):
    img_url = None
    if image:
        img_url = imageUpload(image, UPLOAD_DIR_DESTINATION_IMAGES)

    return await update_destination_image(id,
        DestinationImageUpdate(            
            image_url=img_url,
            alt_text=alt_text,
            display_order=display_order,
            is_primary=is_primary
        ), db)

@router.delete("/deleteDestinationImage")
async def deleteDestinationImage(id:int, db:AsyncSession=Depends(get_db)):
    return await delete_destination_image(id, db)

@router.get("/viewDestinationImages/{destination_id}")
async def viewDestinationImages(destination_id:int, db:AsyncSession=Depends(get_db)):
    return await view_destination_images(destination_id, db)