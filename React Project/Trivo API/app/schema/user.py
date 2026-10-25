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
   
class Login(BaseModel):
    email:str
    password:str