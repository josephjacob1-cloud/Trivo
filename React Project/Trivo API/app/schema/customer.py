from uuid import UUID
from datetime import date
from pydantic import BaseModel, EmailStr

class BookingCreate(BaseModel):
  package_id:int
  travel_date:date
  number_of_adults:int
  number_of_children:int    

class ContactUsCreate(BaseModel):
  name:str
  email:EmailStr
  phone:str
  subject:str
  message:str

class PackageReviewCreate(BaseModel):
  package_id:int
  user_id:UUID 
  rating:int =""
  review:str =""

class PackageReviewUpdate(BaseModel): 
  rating:int =""
  review:str =""