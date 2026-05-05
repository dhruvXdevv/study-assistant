import os
from openai import OpenAI
from dotenv import load_dotenv
import json

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_flashcards(text: str):
    prompt = f"""
You are a study assistant. Given the following text, generate 5 flashcards.
Each flashcard must have a "question" and an "answer".
Return ONLY a JSON array like this:
[
  {{"question": "...", "answer": "..."}},
  ...
]

Text:
{text}
"""
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
    )
    content = response.choices[0].message.content
    return json.loads(content)


def generate_quiz(text: str):
    prompt = f"""
You are a quiz maker. Given the following text, generate 4 multiple choice questions.
Each question must have: "question", "options" (array of 4), and "answer" (the correct option).
Return ONLY a JSON array like this:
[
  {{
    "question": "...",
    "options": ["A", "B", "C", "D"],
    "answer": "A"
  }},
  ...
]

Text:
{text}
"""
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
    )
    content = response.choices[0].message.content
    return json.loads(content)


def generate_summary(text: str):
    prompt = f"""
You are a study assistant. Summarize the following text into 5 clear, concise bullet points.
Return ONLY a JSON array of strings like:
["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"]

Text:
{text}
"""
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.5,
    )
    content = response.choices[0].message.content
    return json.loads(content)
