from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.openai_service import generate_flashcards, generate_quiz, generate_summary

router = APIRouter()

class TextInput(BaseModel):
    text: str

@router.post("/flashcards")
async def flashcards(body: TextInput):
    if len(body.text.strip()) < 20:
        raise HTTPException(status_code=400, detail="Text too short. Please provide more content.")
    try:
        result = generate_flashcards(body.text)
        return {"flashcards": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/quiz")
async def quiz(body: TextInput):
    if len(body.text.strip()) < 20:
        raise HTTPException(status_code=400, detail="Text too short. Please provide more content.")
    try:
        result = generate_quiz(body.text)
        return {"quiz": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/summary")
async def summary(body: TextInput):
    if len(body.text.strip()) < 20:
        raise HTTPException(status_code=400, detail="Text too short. Please provide more content.")
    try:
        result = generate_summary(body.text)
        return {"summary": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
