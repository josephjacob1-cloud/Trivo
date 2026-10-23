from fastapi import APIRouter, Depends, status
from app.schema.user import UserCreate, Login
from app.db.database import get_db
from sqlalchemy.ext.asyncio import AsyncSession
from app.crud.auth import add_user, user_login, user_login_OAuth
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")
router = APIRouter()
@router.post("/signup", status_code=status.HTTP_202_ACCEPTED)
async def signup(user:UserCreate, db:AsyncSession=Depends(get_db)):
    return await add_user(user, db)


# @router.post("/login", status_code=status.HTTP_202_ACCEPTED)
# async def login(user:Login, db:AsyncSession=Depends(get_db)):
#     return await user_login(user, db)

@router.post("/login", status_code=status.HTTP_202_ACCEPTED)
async def login(user:OAuth2PasswordRequestForm=Depends(), db:AsyncSession=Depends(get_db)):
   return await user_login_OAuth(user, db)

@router.get("/packages", status_code=status.HTTP_202_ACCEPTED)
async def packages(db:AsyncSession=Depends(get_db),token:str = Depends(oauth2_scheme)):
    return "showing packages"

