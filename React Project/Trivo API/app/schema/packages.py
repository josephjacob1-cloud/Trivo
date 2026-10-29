from pydantic import BaseModel

class PackageCreate(BaseModel):
    name:str
    category:str
    days:int
    price:float
    destination_ids:list[int]
    description:str
    active:bool = True
    # coverImage:str

class PackageUpdate(BaseModel):
    name:str | None = None
    category:str | None = None
    days:int | None = None
    price:float | None = None
    destination_ids:list[int] | None = None
    description:str | None = None
    active:bool | None = None

class PackageCategoryCreate(BaseModel):
    name:str = ""

