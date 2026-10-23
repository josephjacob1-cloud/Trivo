from sqlalchemy import Column, Integer, String, Numeric, ARRAY, Boolean

from app.db.database import Base


class Package(Base):
    __tablename__="packages"
    id=Column(Integer, primary_key=True, index=True)
    name=Column(String, nullable=False)
    category=Column(String)
    days=Column(Integer)
    price=Column(Numeric(10,2))
    destination_ids=Column(ARRAY(Integer), Foreign_key=("destinations.id"))
    description=Column(String)
    active=Column(Boolean, default=True)

class PackageCategories(Base):
    __tablename__="package_categories"
    id=Column(Integer, primary_key=True, index=True)
    name=Column(String, nullable=False)
