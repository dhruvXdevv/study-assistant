# 🧠 StudyMind AI — Intelligent Study Assistant

> Paste any text or topic. Get flashcards, a quiz & a summary — instantly powered by AI.

![StudyMind Demo](https://readme-typing-svg.demolab.com?font=Share+Tech+Mono&size=16&pause=1000&color=00EAFF&width=600&lines=Paste+any+text...;Get+AI+flashcards+instantly;Quiz+yourself+in+seconds;Study+smarter%2C+not+harder)

---

## 🚀 Live Demo

> 🔗 [studymind-ai.vercel.app](https://studymind-ai.vercel.app) *(deploy link — add yours here)*

---

## ✨ Features

- 📋 **Auto Flashcard Generator** — paste any text, get clean Q&A flashcards instantly
- 🧪 **AI Quiz Builder** — generates multiple choice questions from your content
- 📝 **Smart Summarizer** — condenses long text into key bullet points
- 💾 **Session History** — saves your past study sessions via MongoDB
- ⚡ **Fast API backend** — built with FastAPI for low-latency AI responses

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Tailwind CSS |
| Backend | FastAPI (Python) |
| AI | OpenAI API (GPT-4o) |
| Database | MongoDB |
| Deployment | Vercel + Render |

---

## 📁 Project Structure

```
studymind-ai/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── InputBox.jsx
│   │   │   ├── FlashCards.jsx
│   │   │   ├── Quiz.jsx
│   │   │   └── Summary.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── main.py
│   ├── routes/
│   │   └── generate.py
│   ├── services/
│   │   └── openai_service.py
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- Python 3.10+
- OpenAI API key (get one at platform.openai.com)
- MongoDB URI (free at mongodb.com/atlas)

### 1. Clone the repo
```bash
git clone https://github.com/dhruvXdevv/studymind-ai.git
cd studymind-ai
```

### 2. Setup the backend
```bash
cd backend
pip install -r requirements.txt

# Create a .env file
echo "OPENAI_API_KEY=your_key_here" > .env
echo "MONGO_URI=your_mongo_uri_here" >> .env

# Run the server
uvicorn main:app --reload
```

### 3. Setup the frontend
```bash
cd frontend
npm install

# Create a .env file
echo "VITE_API_URL=http://localhost:8000" > .env

# Run the app
npm run dev
```

### 4. Open in browser
```
http://localhost:5173
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/generate/flashcards` | Generate flashcards from text |
| POST | `/generate/quiz` | Generate quiz questions |
| POST | `/generate/summary` | Summarize text |
| GET | `/sessions` | Get past sessions |

---

## 🌱 Roadmap

- [x] Flashcard generation
- [x] Quiz generation
- [x] Text summarization
- [ ] PDF upload support
- [ ] User authentication
- [ ] Export flashcards to Anki

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first.

---

## 📄 License

MIT License — feel free to use and modify.

---

<div align="center">
Built with 🤖 by <a href="https://github.com/dhruvXdevv">dhruvXdevv</a>
</div>
