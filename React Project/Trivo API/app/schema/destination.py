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