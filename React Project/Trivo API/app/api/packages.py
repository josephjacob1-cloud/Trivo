from pathlib import Path
# import shutil
from uuid import uuid4

from fastapi import APIRouter, HTTPException, status, Depends, UploadFile, File
from app.core.config import UPLOAD_DIR_PACKAGE_COVER
from app.db.database import get_db
from sqlalchemy.ext.asyncio import AsyncSession
from app.schema.packages import PackageCategoryCreate, PackageCreate, PackageUpdate
from app.crud.packages import add_package_categories, get_package_categories, add_package, get_package, update_package, disable_package, enable_package
from app.core.upload import imageUpload

router = APIRouter()


@router.post("addCoverImage")
async def add_cover_image(image:UploadFile = File(...)):
    return imageUpload(image, UPLOAD_DIR_PACKAGE_COVER)
    # allowed_types = {        
    #     "image/jpeg": ".jpg",
    #     "image/png": ".png",
    #     "image/webp": ".webp",
    # }
    # extension = allowed_types.get(image.content_type)
    # if not extension:
    #     raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Only ,jpg, .png and .webp are allowed")
    # filename = f"{uuid4().hex}{extension}"
    # file_path = UPLOAD_DIR / filename
    # image_data = image.file.read()
    # try:
    #     # with file_path.open("wb") as buffer:
    #     #     shutil.copyfileobj(image.file, buffer)
    #     with open(file_path, "wb") as file:
    #             file.write(image_data)
    # finally:
    #     image.file.close()

    # return {
    #     "message": "Image uploaded successfully",
    #     "filename": filename,
    #     "coverImage": f"uploads/packages/{filename}"
    # }



# @router.post("/addPackage")
# async def addPackages(pack:PackageCreate, image:UploadFile = File(...), db:AsyncSession=Depends(get_db)):
#     return await add_package(pack, imageUpload(image, UPLOAD_DIR_PACKAGE_COVER), db)


# import json
# from fastapi import Form, File, UploadFile, Depends
# from sqlalchemy.ext.asyncio import AsyncSession

# @router.post("/addPackage")
# async def addPackages(
#     pack: str = Form(...),
#     image: UploadFile = File(...),
#     db: AsyncSession = Depends(get_db)
# ):
#     print("PACK TYPE:", type(pack))
#     print("PACK VALUE:", pack)
#     print("IMAGE:", image.filename)

#     pack_data = PackageCreate.model_validate_json(pack)

#     cover = imageUpload(image, UPLOAD_DIR_PACKAGE_COVER)

#     return await add_package(pack_data, cover, db)


from fastapi import Form, File, UploadFile, Depends
from sqlalchemy.ext.asyncio import AsyncSession

@router.post("/addPackage")
async def addPackages(
    name: str = Form(...),
    category: str = Form(...),
    days: int = Form(...),
    price: float = Form(...),
    destination_ids: str = Form(...),
    description: str = Form(...),
    active: bool = Form(True),
    image: UploadFile = File(...),
    db: AsyncSession = Depends(get_db)
):
    # Convert comma-separated string into a list of integers
    try:
        destination_id_list = [
            int(x.strip())
            for x in destination_ids.split(",")
            if x.strip()
        ]
    except ValueError:
        from fastapi import HTTPException
        raise HTTPException(
            status_code=422,
            detail="destination_ids must contain comma-separated integers, e.g. 2,5"
        )

    pack = PackageCreate(
        name=name,
        category=category,
        days=days,
        price=price,
        destination_ids=destination_id_list,
        description=description,
        active=active
    )

    cover = imageUpload(image, UPLOAD_DIR_PACKAGE_COVER)

    return await add_package(pack, cover, db)





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
