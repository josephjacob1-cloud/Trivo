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

class DestinationImage(Base):
    __tablename__ = "destination_images"
    id=Column(Integer, primary_key=True, index=True)
    destination_id=Column(Integer, ForeignKey("destinations.id"))
    image_url=Column(String, nullable=False)
    alt_text = Column(String, nullable=True)
    display_order = Column(Integer, default=1)
    is_primary = Column(Boolean, default=False)
