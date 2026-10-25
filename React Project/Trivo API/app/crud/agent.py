from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import func, select
from app.model.packages import Package
from app.model.customer import Booking
from app.model.user import User


async def get_all_booking(db:AsyncSession):
    data = await db.execute(select(Booking))
    packs = data.scalars().all()
    return packs

async def get_all_users(db:AsyncSession):
    data = await db.execute(select(User))
    users = data.scalars().all()
    return users

async def get_all_consultant(db:AsyncSession):
    data = await db.execute(select(User).where(User.role=="consultant"))
    consultants = data.scalars().all()
    return consultants

async def get_all_customers(db:AsyncSession):
    data = await db.execute(select(User).where(User.role=="customer"))
    custmers = data.scalars().all()
    return custmers
