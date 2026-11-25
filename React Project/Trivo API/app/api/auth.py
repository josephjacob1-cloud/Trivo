from uuid import UUID

from fastapi import APIRouter, Depends, status, HTTPException
from app.core.OAuth import verify_token
from app.schema.user import UserCreate, Login, UserSignupResponse, UserProfileResponse, UserUpdate, UserPasswordUpdate
from app.db.database import get_db
from sqlalchemy.ext.asyncio import AsyncSession
from app.crud.auth import add_user, user_login, user_login_OAuth, get_user_data, get_user_Profile_update, get_user_Password_update
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from app.core.config import USER_CUSTOMER, USER_ADMIN

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")
router = APIRouter()
@router.post("/signup", status_code=status.HTTP_202_ACCEPTED, response_model=UserSignupResponse)
async def signup(user:UserCreate, db:AsyncSession=Depends(get_db)):
    print(user)
    return await add_user(user, db)


# @router.post("/login", status_code=status.HTTP_202_ACCEPTED)
# async def login(user:Login, db:AsyncSession=Depends(get_db)):
#     return await user_login(user, db)

@router.post("/login", status_code=status.HTTP_200_OK)
async def login(user:OAuth2PasswordRequestForm=Depends(), db:AsyncSession=Depends(get_db)):
   return await user_login_OAuth(user, db)

# @router.get("/packages", status_code=status.HTTP_202_ACCEPTED)
# async def packages(db:AsyncSession=Depends(get_db),token:dict = Depends(verify_token)):
#     return {"token":token}

@router.get("/getUser/{id}", response_model=UserProfileResponse)
async def getUser(id:UUID, db:AsyncSession=Depends(get_db), payload:dict=Depends(verify_token)):
    return await get_user_data(id, db)

@router.patch("/updateUser/{id}", response_model=UserProfileResponse)
async def updateUser(id:UUID, update:UserUpdate, db:AsyncSession = Depends(get_db)):
    return await get_user_Profile_update(id, update, db)

@router.patch("/changeUserPassword/{id}", response_model=UserProfileResponse)
async def updateUser(id:UUID, updatePWD:UserPasswordUpdate, db:AsyncSession = Depends(get_db)):
    return await get_user_Password_update(id, updatePWD, db)