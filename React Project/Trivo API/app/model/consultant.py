from uuid import UUID, uuid4
from sqlalchemy import Column, String
from app.db.database import Base
from app.model.user import User

# class Consultant(User):
#     role=Column(String, default="consultant")


# class Consultant(Base):
#     __tablename__="consultants"
#     id=Column(UUID(as_uuid=True), primary_key=True, index=True, default=uuid4)
#     email=Column(String, nullable=False, index=True)
#     name=Column(String, nullable=False)
#     phone=Column(String, nullable=False)    
#     dob=Column(Date)
#     passport=Column(String)
#     address=Column(String)
#     password=Column(String)
#     role=Column(String, default="consultant")
#     active=Column(Boolean)