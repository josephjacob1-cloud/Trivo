from datetime import datetime, timezone
from uuid import uuid4, UUID
from sqlalchemy import UUID, Column, String, ForeignKey, Date, Integer, Numeric, Boolean,  DateTime
from app.db.database import Base


class Booking(Base):
  __tablename__ ="bookings"
  id=Column(UUID(as_uuid=True), primary_key=True, index=True, default=uuid4)
  booking_number=Column(String, nullable=False)
  customer_id=Column(UUID, ForeignKey("users.id"))
  consultant_id=Column(UUID, default=None)
  package_id=Column(Integer)
  travel_date=Column(Date)
  number_of_adults=Column(Integer)
  number_of_children=Column(Integer)
  discount=Column(Integer, default=0) 
  total_amount=Column(Numeric(10,2))
  currency=Column(String, default="INR")  
  payment_status=Column(String, default="Not Paid")
  status=Column(String, default="pending")


class ContactUs(Base):
  __tablename__="contact_us"
  id=Column(UUID(as_uuid=True), primary_key=True, index=True, default=uuid4)
  name=Column(String)
  email=Column(String)
  phone=Column(String)
  subject=Column(String)
  message=Column(String)

class Review(Base):
  __tablename__="package_reviews"
  id=Column(UUID(as_uuid=True), primary_key=True, index=True, default=uuid4)
  package_id=Column(Integer, ForeignKey("packages.id"), nullable=False, index=True)
  user_id=Column(UUID, ForeignKey("users.id"), nullable=False, index=True)
  rating=Column(Integer)
  review=Column(String)
  created_at = Column(
    DateTime(timezone=True),default=lambda: datetime.now(timezone.utc))
  active=Column(Boolean, default=True)