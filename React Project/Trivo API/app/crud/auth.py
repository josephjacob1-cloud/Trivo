from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.model.user import User
from app.schema.user import UserCreate
from fastapi import APIRouter, HTTPException, status, Depends
from app.core.security import create_hash_password, verify_hash_password
from fastapi.security import OAuth2PasswordRequestForm
from app.core.OAuth import create_token

async def check_email_exist(email:str, db:AsyncSession):
    data = await db.execute(select(User).where(User.email == email))
    return data.scalar_one_or_none()

async def  add_user(user:UserCreate, db:AsyncSession, role:str="customer"):
    email_exists = await check_email_exist(user.email, db)
    if email_exists:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail= "Email already registered")
    new_user = User(
        email=user.email,
        name=user.name,
        phone=user.phone,
        dob=user.dob,   
        passport = user.passport,
        address=user.address,
        password=create_hash_password(user.password),
        role = role,
        active=True
    )
    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)
    return new_user

async def get_consultant(db:AsyncSession):
    data = await db.execute(select(User).where(User.role == "consultant"))
    consultants = data.scalars().all()
    return consultants

async def user_login(user:UserCreate, db:AsyncSession):
    exist = await check_email_exist(user.email, db)
    if not exist:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"user  {user.email} is not registered")
    if not verify_hash_password(user.password, exist.password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Password mismatch")
    return exist

async def user_login_OAuth(user:OAuth2PasswordRequestForm, db:AsyncSession):
    exist = await check_email_exist(user.username, db)
    if not exist:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"user  {user.username} is not registered")
    if not verify_hash_password(user.password, exist.password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Password mismatch")
    data = {"username":user.username, "role":exist.role, "id":str(exist.id)}
    token = await create_token(data)    
    return {"access_token":token, "token_type":"bearer"}