from fastapi import APIRouter, HTTPException, status, Depends
from uuid import UUID
from app.core.OAuth import verify_token
from app.core.config import USER_CUSTOMER
from app.db.database import get_db
from app.crud.customer import book_package, view_customer_package, get_my_booking, add_contact_us, add_review, get_all_review, get_review_package_id, update_review, delete_review, view_customer_package_detail
from sqlalchemy.ext.asyncio import AsyncSession
from app.schema.customer import BookingCreate, ContactUsCreate, PackageReviewCreate, PackageReviewUpdate

router = APIRouter()

@router.get("/viewCustomerPackages")
async def viewCustomerPackages(db:AsyncSession=Depends(get_db), payload:dict = Depends(verify_token)):
    if payload["role"] != USER_CUSTOMER:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Only customer can se the packages")
    return await view_customer_package(db)

@router.get("/viewCustomerPackagesDetail")
async def viewCustomerPackagesDetail(db:AsyncSession=Depends(get_db)):
    return await view_customer_package_detail(db)

@router.post("/bookPackage")
async def bookPackage(booking:BookingCreate, db:AsyncSession=Depends(get_db), payload:dict=Depends(verify_token)):
    return await book_package(booking, db, payload)

@router.get("/getMyBooking")
async def get_Booking(db:AsyncSession=Depends(get_db), payload:dict=Depends(verify_token)):
    return await get_my_booking(db, payload)

@router.post("/contactUs")
async def contactUs(contact:ContactUsCreate, db:AsyncSession=Depends(get_db)):
    return await add_contact_us(contact, db)

@router.post("/addReview")
async def addReview(review:PackageReviewCreate, db:AsyncSession=Depends(get_db)):
    return await add_review(review, db)

@router.get("/allReviews")
async def getAllReviews(db:AsyncSession=Depends(get_db)):
    return await get_all_review(db)

@router.get("/getReviewByPackageID/{id}")
async def getReviewByPackageID(id:int, db:AsyncSession=Depends(get_db)):
    return await get_review_package_id(id, db)

@router.put("/updateReview/")
async def updateReview(id:UUID,review:PackageReviewUpdate, db:AsyncSession=Depends(get_db)):
    return await update_review(id, review, db)

@router.patch("/deleteReview/")
async def deleteReview(id:UUID, db:AsyncSession=Depends(get_db)):
    return await delete_review(id, db)