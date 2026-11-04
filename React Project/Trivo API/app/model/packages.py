from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy import Column, Integer, String, Numeric, ARRAY, Boolean, ForeignKey, Text

from app.db.database import Base

    
class Package(Base):
    __tablename__="packages"
    id=Column(Integer, primary_key=True, index=True)
    name=Column(String, nullable=False)
    category=Column(String)
    days=Column(Integer)
    price=Column(Numeric(10,2))
    destination_ids=Column(ARRAY(Integer), ForeignKey("destinations.id"))
    description=Column(String)
    active=Column(Boolean, default=True)
    coverImage=Column(String)
    highlights=Column(ARRAY(String), default=list)
    itinerary=Column(JSONB, default=list)
    inclusions=Column(ARRAY(String), default=list)
    exclusions=Column(ARRAY(String), default=list)
    hotel=Column(JSONB, default=list) 
    transport=Column(JSONB, default=list)
    languages = Column(ARRAY(String), nullable=True)
    meetingPoint = Column(String, nullable=True)
    tourType = Column(String, default="Friends & Family")
    maxGuests = Column(Integer, default=30)
    minimumAge = Column(Integer, default=1)
    cancellationPolicy = Column(Text, nullable=True)


class PackageCategories(Base):
    __tablename__="package_categories"
    id=Column(Integer, primary_key=True, index=True)
    name=Column(String, nullable=False)
