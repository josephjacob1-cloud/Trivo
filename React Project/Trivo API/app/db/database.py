from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import declarative_base
from app.core.config import DATABASE_URL

engine = create_async_engine(DATABASE_URL)
sessionLocal = async_sessionmaker(bind=engine, class_=AsyncSession)
Base = declarative_base()


async def get_db():
    async with sessionLocal() as db:
        try:
            yield db
        finally:
            await db.close()