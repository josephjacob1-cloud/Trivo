from pydantic import BaseModel
from pydantic.v1 import Field

class ItineraryDay(BaseModel):
    day: int
    title: str
    description: str

class Hotel(BaseModel):
    name: str
    category: str
    roomType: str
    checkIn: str
    checkOut: str

class Transport(BaseModel):
    type: str
    pickup: bool = False
    drop: bool = False
    airportTransfer: bool = False

class PackageCreate(BaseModel):
    name:str
    category:str
    days:int
    price:float
    destination_ids:list[int]
    description:str
    active:bool = True    
    highlights:list[str]
    itinerary:list[ItineraryDay] 
    inclusions:list[str]
    exclusions:list[str]
    hotel: list[Hotel] = Field(default_factory=list)
    transport: list[Transport] = Field(default_factory=list) 
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

