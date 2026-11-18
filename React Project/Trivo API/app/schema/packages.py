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
    destination_id: int | None = None

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
    languages: list[str] = Field(default_factory=list)
    meetingPoint: str
    tourType: str
    maxGuests: int
    minimumAge: int
    cancellationPolicy: str
    # coverImage:str

class PackageUpdate(BaseModel):
    name:str | None = None
    category:str | None = None
    days:int | None = 1
    price:float | None = 0
    destination_ids:list[int] | None = None
    description:str | None = None
    active:bool | None = True
    highlights:list[str]
    itinerary:list[ItineraryDay] 
    inclusions:list[str]
    exclusions:list[str]
    hotel: list[Hotel]
    transport: list[Transport]
    languages: list[str]
    tourType: str
    maxGuests: int
    minimumAge: int
    cancellationPolicy: str
    coverImage:str

class PackageCategoryCreate(BaseModel):
    name:str = ""

