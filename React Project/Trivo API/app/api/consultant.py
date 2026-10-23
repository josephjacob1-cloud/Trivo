from fastapi import APIRouter, HTTPException, status, Depends
from app.db.database import get_db
from app.schema.user  import UserCreate
from app.crud.auth import add_user, get_consultant
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()


@router.post("/addConsultant", status_code=status.HTTP_201_CREATED)
async def addConsultant(user:UserCreate, db:AsyncSession=Depends(get_db)):
    # consultant = user.model_copy(update={"role": "consultant"})
    # consultant["role"] = "consultant"
    return await add_user(user, db)

@router.get("/getConsultant", status_code=status.HTTP_202_ACCEPTED)
async def getConsultant(db:AsyncSession=Depends(get_db)):   
    return await get_consultant(db)
