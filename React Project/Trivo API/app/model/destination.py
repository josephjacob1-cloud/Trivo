from sqlalchemy import Column, ForeignKey, Integer, String, Boolean

from app.db.database import Base

class Category(Base):
    __tablename__ = "destination_categories"
    id=Column(Integer, primary_key=True, index=True)
    name=Column(String, nullable=True)

class Destination(Base):
    __tablename__ = "destinations"
    id=Column(Integer, primary_key=True, index=True)
    name=Column(String, nullable=False)
    nickname=Column(String)
    country=Column(String, nullable=False)
    city=Column(String, nullable=False)
    category_id=Column(Integer, ForeignKey("destination_categories.id"))
    description=Column(String, nullable=False)
    active = Column(Boolean, default=True)
