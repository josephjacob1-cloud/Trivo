from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db.database import engine, Base
from app.api.auth import router as auth_router
from app.api.destination import router as destination_router
from app.api.packages import router as packages_router
from app.api.consultant import router as consultant_router
from app.api.customer import router as customer_router
from app.api.agent import router as agent_router
app=FastAPI()


@app.on_event("startup")
async def startUp():
    async with engine.begin() as connectDB:
        await connectDB.run_sync(Base.metadata.create_all)

@app.on_event("shutdown")
async def shutDown():
    await engine.dispose()

app.include_router(agent_router, prefix="/agent", tags=["agents"])
app.include_router(auth_router, prefix="/auth", tags=["user registration"])
app.include_router(destination_router, prefix="/destination", tags=["Destination"])
app.include_router(packages_router, prefix="/packages", tags=["Packages"])
app.include_router(consultant_router, prefix="/consultant", tags=["Consultant"])
app.include_router(customer_router,prefix="/customer", tags=["Customer"])



app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from pathlib import Path
from fastapi.staticfiles import StaticFiles

BASE_DIR = Path(__file__).resolve().parent.parent

UPLOAD_DIR = BASE_DIR / "uploads"

app.mount(
    "/uploads",
    StaticFiles(directory=str(UPLOAD_DIR)),
    name="uploads"
)