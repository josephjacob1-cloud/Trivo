from fastapi.security import OAuth2PasswordBearer

from app.core.config import ACCESS_TOKEN_EXPIRE_MINUTES, SECRET_KEY, ALGORITHM
from jose import jwt, JWTError
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status
# from app.api.auth import oauth2_scheme
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_db

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

async def create_token(data):
    exp = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    data.update({"exp":exp})
    token = jwt.encode(data, SECRET_KEY, algorithm=ALGORITHM)
    return token

async def verify_token(db:AsyncSession=Depends(get_db), token:str=Depends(oauth2_scheme)):
    credential_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Authorization failed or timeout", headers={"WWW-Authenticate": "Bearer"})
    try:
        payload = jwt.decode(token, key=SECRET_KEY, algorithms=ALGORITHM)
        username =  payload.get("username")
        if username is None:
            raise credential_exception
    except JWTError as e:
        raise credential_exception
    return payload
