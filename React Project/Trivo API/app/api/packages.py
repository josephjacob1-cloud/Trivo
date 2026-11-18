from pathlib import Path
# import shutil
from uuid import uuid4
import json
from fastapi import APIRouter, HTTPException, status, Depends, UploadFile, File
from app.core.config import UPLOAD_DIR_PACKAGE_COVER
from app.db.database import get_db
from sqlalchemy.ext.asyncio import AsyncSession
from app.schema.packages import PackageCategoryCreate, PackageCreate, PackageUpdate
from app.crud.packages import add_package_categories, get_package_categories, add_package, get_package, update_package, disable_package, enable_package
from app.core.upload import imageUpload

import uuid

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

# def parse_string_list(value: str) -> list[str]:
#     try:
#         data = json.loads(value)

#         if isinstance(data, list):
#             return [str(item).strip() for item in data]

#     except json.JSONDecodeError:
#         pass

#     # Fallback: comma-separated values
#     return [item.strip() for item in value.split(",") if item.strip()]

def parse_string_list(value: str) -> list[str]:
    value = value.strip()

    try:
        data = json.loads(value)
        if isinstance(data, list):
            return [str(item).strip() for item in data]
    except json.JSONDecodeError:
        pass

    # Handle Swagger comma-separated input
    value = value.strip("[]")

    return [
        item.strip().strip('"').strip("'")
        for item in value.split(",")
        if item.strip()
    ]

def parse_json_field(field_name: str, value: str):
    try:
        return json.loads(value)
    except json.JSONDecodeError as exc:
        raise HTTPException(
            status_code=422,
            detail=f"Invalid JSON in '{field_name}': {exc.msg}, position: {exc.pos}"
        )

@router.post("/addPackage")
async def addPackages(
    name: str = Form(...),
    category: str = Form(...),
    days: int = Form(...),
    price: float = Form(...),
    destination_ids: str = Form(...),  # Comma-separated string of destination IDs]),
    description: str = Form(...),
    active: bool = Form(True),
    image: UploadFile = File(...),
    highlights: str = Form("[]"),  # highlights: list[str] = Form([]),
    itinerary: str = Form("[]"),  # highlights: list[str] = Form([]),#itinerary: list[dict] = Form([{"day":"1", "title":"","description":""}]),
    inclusions: str = Form("[]"),  # highlights: list[str] = Form([]),   
    exclusions: str = Form('[Purchase,Visa charge]'),  # highlights: list[str] = Form([]),
    hotel: str = Form("[]"),  # highlights: list[str] = Form([]),
    transport: str = Form("[]"),  # highlights: list[str] = Form([]),    
    languages: str = Form("[]"),
    meetingPoint: str = Form(...),
    tourType: str = Form(...),
    maxGuests: int = Form(...),
    minimumAge: int = Form(...),
    cancellationPolicy: str = Form(...),
    db: AsyncSession = Depends(get_db)
):
    try:
        destination_id_list = [
            int(x.strip())
            for x in destination_ids.split(",")
            if x.strip()
        ]
    except ValueError:
        raise HTTPException(
            status_code=422,
            detail="Invalid destination IDs"
        )

    try:
        highlights_list = parse_string_list(highlights)
        itinerary_list = parse_json_field("itinerary", itinerary)
        inclusions_list = parse_string_list(inclusions)
        exclusions_list = parse_string_list(exclusions)
        hotel_list = parse_json_field("hotel", hotel)
        transport_list = parse_json_field("transport", transport)
        language_list = parse_string_list(languages)

    except json.JSONDecodeError as exc:
        raise HTTPException(
            status_code=422,
            detail=f"Invalid JSON: {exc.msg}"
        )
       

    pack = PackageCreate(
        name=name,
        category=category,
        days=days,
        price=price,
        destination_ids=destination_id_list,
        description=description,
        active=active,
        highlights=highlights_list,
        itinerary=itinerary_list,
        inclusions=inclusions_list,
        exclusions=exclusions_list,
        hotel=hotel_list,
        transport=transport_list,
        languages=language_list,
        meetingPoint=meetingPoint,
        tourType=tourType,
        maxGuests=maxGuests,
        minimumAge=minimumAge,
        cancellationPolicy=cancellationPolicy
    )
    
    cover = imageUpload(image, UPLOAD_DIR_PACKAGE_COVER)
    return await add_package(pack, cover, db)




@router.get("/getPackages")
async def getPackages(db:AsyncSession=Depends(get_db)):
    return await get_package(db)

# @router.patch("/updatePackage/{id}")
# async def updatePackage(id:int, pack:PackageUpdate, db:AsyncSession=Depends(get_db)):
#     return await update_package(id, pack, db)


@router.patch("/updatePackage/{id}")
async def updatePackage(
    id: int,
    name: str | None = Form(None),
    category: str | None = Form(None),
    days: int | None = Form(None),
    price: float | None = Form(None),
    destination_ids: str | None = Form(None),
    description: str | None = Form(None),
    active: bool | None = Form(None),
    highlights: str | None = Form(None),
    itinerary: str | None = Form(None),
    inclusions: str | None = Form(None),
    exclusions: str | None = Form(None),
    hotel: str | None = Form(None),
    transport: str | None = Form(None),
    languages: str | None = Form(None),
    meetingPoint: str | None = Form(None),
    tourType: str | None = Form(None),
    maxGuests: int | None = Form(None),
    minimumAge: int | None = Form(None),
    cancellationPolicy: str | None = Form(None),
    image: UploadFile | None = File(None),
    db: AsyncSession = Depends(get_db)
):
    try:
        update_data = {}

        # Simple fields
        simple_fields = {
            "name": name,
            "category": category,
            "days": days,
            "price": price,
            "description": description,
            "active": active,
            "meetingPoint": meetingPoint,
            "tourType": tourType,
            "maxGuests": maxGuests,
            "minimumAge": minimumAge,
            "cancellationPolicy": cancellationPolicy
        }

        for key, value in simple_fields.items():
            if value is not None:
                update_data[key] = value

        # Destination IDs: accepts "6,7" or "[6,7]"
        if destination_ids is not None:
            try:
                if destination_ids.strip().startswith("["):
                    update_data["destination_ids"] = json.loads(destination_ids)
                else:
                    update_data["destination_ids"] = [
                        int(item.strip())
                        for item in destination_ids.split(",")
                        if item.strip()
                    ]
            except (ValueError, json.JSONDecodeError):
                raise HTTPException(
                    status_code=422,
                    detail="Invalid destination_ids"
                )

        # JSON fields sent from React
        json_fields = {
            "highlights": highlights,
            "itinerary": itinerary,
            "inclusions": inclusions,
            "exclusions": exclusions,
            "hotel": hotel,
            "transport": transport,
            "languages": languages
        }

        for key, value in json_fields.items():
            if value is not None:
                try:
                    update_data[key] = json.loads(value)
                except json.JSONDecodeError:
                    raise HTTPException(
                        status_code=422,
                        detail=f"Invalid JSON in {key}"
                    )

        # Validate the uploaded image
        cover_image_path = None

        if image is not None and image.filename:
            allowed_extensions = {".jpg", ".jpeg", ".png", ".webp"}
            extension = Path(image.filename).suffix.lower()

            if extension not in allowed_extensions:
                raise HTTPException(
                    status_code=400,
                    detail="Only JPG, JPEG, PNG and WEBP images are allowed"
                )

            upload_dir = Path("uploads/packages")
            upload_dir.mkdir(parents=True, exist_ok=True)

            filename = f"{uuid.uuid4()}{extension}"
            file_path = upload_dir / filename

            file_content = await image.read()
            file_path.write_bytes(file_content)

            cover_image_path = f"/uploads/packages/{filename}"
            update_data["coverImage"] = cover_image_path

        pack = PackageUpdate(**update_data)

        return await update_package(id, pack, db)

    except HTTPException:
        raise


@router.patch("/disablePackage/{id}")
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
