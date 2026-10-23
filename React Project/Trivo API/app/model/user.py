from uuid import UUID, uuid4

from sqlalchemy import Column, UUID, String, Date, Boolean

from app.db.database import Base

class User(Base):
    __tablename__="users"
    id=Column(UUID(as_uuid=True), primary_key=True, index=True, default=uuid4)
    email=Column(String, nullable=False, index=True)
    name=Column(String, nullable=False)
    phone=Column(String, nullable=False)    
    dob=Column(Date)
    passport=Column(String)
    address=Column(String)
    password=Column(String)
    role=Column(String)
    active=Column(Boolean)

