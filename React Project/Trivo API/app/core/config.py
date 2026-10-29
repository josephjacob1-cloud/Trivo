import os
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABSE_URL")
SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))


USER_CUSTOMER = "customer"
USER_CONSULTANT = "consultant"
USER_ADMIN = "admin"


UPLOAD_DIR_PACKAGE_COVER = Path("uploads/packages/cover")
UPLOAD_DIR_PACKAGE_COVER.mkdir(parents=True, exist_ok=True)