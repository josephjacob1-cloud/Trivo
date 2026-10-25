from fastapi import APIRouter, HTTPException, status, Depends
from app.core.OAuth import verify_token
from app.db.database import get_db
from app.crud.agent import get_all_booking, get_all_users, get_all_consultant, get_all_customers
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()

@router.get("/getAllBooking")
async def getAllBooking(db:AsyncSession=Depends(get_db), payload:dict=Depends(verify_token)):
    if payload.get("role") != "admin":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Only admin can see the bookings") 
    return await get_all_booking(db)

@router.get("/getAllUsers")
async def getAllUsers(db:AsyncSession=Depends(get_db), payload:dict=Depends(verify_token)):
    if payload.get("role") != "admin":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Only admin can see all the Users") 
    return await get_all_users(db)

@router.get("/getAllConsultant")
async def getAllConsultants(db:AsyncSession=Depends(get_db), payload:dict=Depends(verify_token)):
    if payload.get("role") != "admin":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Only admin can see all the Consultants") 
    return await get_all_consultant(db)

@router.get("/getAllCustomers")
async def getAllCustomers(db:AsyncSession=Depends(get_db), payload:dict=Depends(verify_token)):
    if payload.get("role") != "admin":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Only admin can see all the customers") 
    return await get_all_customers(db)