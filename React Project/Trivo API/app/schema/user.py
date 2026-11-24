from uuid import UUID

from pydantic import BaseModel, EmailStr
from datetime import date

class UserCreate(BaseModel):
    email:EmailStr
    name:str
    phone:str
    dob:date
    passport:str
    address:str
    password:str
    # role:str
   
class UserSignupResponse(BaseModel):
    email:EmailStr
    name:str
    
class Login(BaseModel):
    email:str
    password:str

class UserProfileResponse(BaseModel):
    id:UUID
    email:EmailStr
    name:str
    phone:str
    dob:date
    passport:str
    address:str

class UserUpdate(BaseModel):
    email:EmailStr | None = None
    name:str | None = None
    phone:str | None = None
    dob:date | None = None
    passport:str | None = None
    address:str | None = None

class UserPasswordUpdate(BaseModel):
    oldPassword:str
    password:str