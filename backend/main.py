from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.generate import router as generate_router

app = FastAPI(title="StudyMind AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://studymind-ai.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(generate_router, prefix="/generate")

@app.get("/")
def root():
    return {"status": "StudyMind AI is running 🧠"}
