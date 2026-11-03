from pydantic import BaseModel

class CategoriesCreate(BaseModel):
    name:str = ""

class DestinationCreate(BaseModel):
    name:str = ""
    nickname:str =""
    country:str =""
    city:str =""
    category_id:int = 1
    description:str = ""
    active:bool

class updateDestination(BaseModel):
    name:str | None = None
    nickname:str | None = None
    country:str | None = None
    city:str | None = None
    category_id:int | None = None
    description:str | None = None
    active:bool | None = None


class DestinationImageCreate(BaseModel):
    destination_id:int  = 1
    image_url:str = "123"
    alt_text:str | None = None
    display_order:int | None = 1
    is_primary:bool | None = False

class DestinationImageUpdate(BaseModel):
    # destination_id:int | None = None
    image_url:str | None = None
    alt_text:str | None = None
    display_order:int | None = 1
    is_primary:bool | None = False