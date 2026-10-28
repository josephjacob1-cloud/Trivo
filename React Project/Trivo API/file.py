# pip install fastapi uvicorn sqlalchemy "psycopg[binary]" python-multipart
from fastapi import FastAPI, Form, UploadFile, File, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker
import os
import uuid
# --------------------------------------------------
# 1. Create FastAPI Application
# --------------------------------------------------
app = FastAPI()
# --------------------------------------------------
# 2. PostgreSQL Database Connection
# --------------------------------------------------
DATABASE_URL = (
    "postgresql+psycopg://postgres:1234@localhost:5432/store_db"
)
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)
Base = declarative_base()
# --------------------------------------------------
# 3. Create Student Table Model
# --------------------------------------------------
class Student(Base):
    __tablename__ = "students"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    age = Column(Integer, nullable=False)
    image = Column(String(255), nullable=False)
# --------------------------------------------------
# 4. Create Database Table
# --------------------------------------------------
Base.metadata.create_all(bind=engine)
# --------------------------------------------------
# 5. Create Uploads Folder
# --------------------------------------------------
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
# --------------------------------------------------
# 6. Make Images Accessible From Browser
# --------------------------------------------------
app.mount(
    "/uploads",
    StaticFiles(directory=UPLOAD_FOLDER),
    name="uploads"
)
# --------------------------------------------------
# 7. Open Frontend
# --------------------------------------------------
@app.get("/")
def home():
    # return FileResponse("index.html")
    return "Hello world"
# --------------------------------------------------
# 8. Upload Image and Save Student Details
# --------------------------------------------------
@app.post("/students")
def create_student(
    name: str = Form(...),
    age: int = Form(...),
    image: UploadFile = File(...)
):
    # Validate image content type
    allowed_types = [
        "image/jpeg",
        "image/png",
        "image/webp"
    ]
    if image.content_type not in allowed_types:
        raise HTTPException(
            status_code=400,
            detail="Only JPG, PNG and WEBP images are allowed"
        )
    # Validate file extension
    extension = os.path.splitext(image.filename or "")[1].lower()
    if extension not in [".jpg", ".jpeg", ".png", ".webp"]:
        raise HTTPException(
            status_code=400,
            detail="Invalid image extension"
        )
    # Read image data and check file size
    image_data = image.file.read()
    if len(image_data) == 0:
        raise HTTPException(
            status_code=400,
            detail="Please upload a non-empty image"
        )
    if len(image_data) > 5 * 1024 * 1024:
        raise HTTPException(
            status_code=413,
            detail="Image size must not exceed 5 MB"
        )
    # Generate a unique filename
    filename = f"{uuid.uuid4().hex}{extension}"
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    # Save image in uploads folder
    with open(file_path, "wb") as file:
        file.write(image_data)
    db = SessionLocal()
    try:
        # Create student object
        student = Student(
            name=name,
            age=age,
            image=filename
        )
        # Add student to database session
        db.add(student)
        # Save changes in PostgreSQL
        db.commit()
        # Get saved student details
        db.refresh(student)
        return {
            "message": "Student added successfully",
            "id": student.id,
            "name": student.name,
            "age": student.age,
            "image_url": f"/uploads/{student.image}"
        }
    except Exception:
        db.rollback()
        # Remove image if database save fails
        if os.path.exists(file_path):
            os.remove(file_path)
        raise HTTPException(
            status_code=500,
            detail="Failed to save student"
        )
    finally:
        db.close()
        image.file.close()
# --------------------------------------------------
# 9. Get All Students
# --------------------------------------------------
@app.get("/students")
def get_students():
    db = SessionLocal()
    try:
        students = db.query(Student).all()
        return [
            {
                "id": student.id,
                "name": student.name,
                "age": student.age,
                "image_url": f"/uploads/{student.image}"
            }
            for student in students
        ]
    finally:
        db.close()
        
        
# from fastapi.middleware.cors import CORSMiddleware
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         "http://localhost:5173",
#         "http://127.0.0.1:5173"
#     ],
#     allow_methods=["*"],
#     allow_headers=["*"]
# )