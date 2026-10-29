

from uuid import uuid4

from fastapi import HTTPException, UploadFile
from starlette import status




def imageUpload(image:UploadFile, path):
    allowed_types = {        
        "image/jpeg": ".jpg",
        "image/png": ".png",
        "image/webp": ".webp",
    }
    extension = allowed_types.get(image.content_type)
    if not extension:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Only ,jpg, .png and .webp are allowed")
    filename = f"{uuid4().hex}{extension}"
    file_path = path / filename
    image_data = image.file.read()
    try:
        # with file_path.open("wb") as buffer:
        #     shutil.copyfileobj(image.file, buffer)
        with open(file_path, "wb") as file:
                file.write(image_data)
    finally:
        image.file.close()
    # return f"{file_path}/{filename}"
    return f"uploads/packages/{filename}"
    # return {
    #     "message": "Image uploaded successfully",
    #     "filename": filename,
    #     "coverImage": f"uploads/packages/{filename}"
    # }