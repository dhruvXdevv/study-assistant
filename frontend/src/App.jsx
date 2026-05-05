import { useState } from "react"
import InputBox from "./components/InputBox"
import FlashCards from "./components/FlashCards"
import Quiz from "./components/Quiz"
import Summary from "./components/Summary"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000"

export default function App() {
  const [text, setText] = useState("")
  const [activeTab, setActiveTab] = useState("flashcards")
  const [flashcards, setFlashcards] = useState([])
  const [quiz, setQuiz] = useState([])
  const [summary, setSummary] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [generated, setGenerated] = useState(false)

  const handleGenerate = async () => {
    if (!text.trim() || text.length < 20) {
      setError("Please enter at least a few sentences of text.")
      return
    }
    setError("")
    setLoading(true)
    setGenerated(false)

    try {
      const [fcRes, qRes, sumRes] = await Promise.all([
        fetch(`${API_URL}/generate/flashcards`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        }),
        fetch(`${API_URL}/generate/quiz`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        }),
        fetch(`${API_URL}/generate/summary`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        }),
      ])

      const fcData = await fcRes.json()
      const qData = await qRes.json()
      const sumData = await sumRes.json()

      setFlashcards(fcData.flashcards || [])
      setQuiz(qData.quiz || [])
      setSummary(sumData.summary || [])
      setGenerated(true)
    } catch (err) {
      setError("Something went wrong. Make sure the backend is running.")
    } finally {
      setLoading(false)
    }
  }

  const tabs = ["flashcards", "quiz", "summary"]

  return (
    <div style={{
      minHeight: "100vh",
      background: "#020c16",
      color: "#c8e8ff",
      fontFamily: "'Share Tech Mono', monospace",
      padding: "32px 24px",
      maxWidth: "860px",
      margin: "0 auto"
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <h1 style={{
          fontSize: "28px",
          color: "#00eaff",
          letterSpacing: "3px",
          fontFamily: "monospace",
          marginBottom: "8px"
        }}>🧠 STUDYMIND AI</h1>
        <p style={{ color: "#4a9eff", fontSize: "13px", letterSpacing: "2px" }}>
          PASTE TEXT → GET FLASHCARDS · QUIZ · SUMMARY
        </p>
      </div>

      {/* Input */}
      <InputBox
        text={text}
        setText={setText}
        onGenerate={handleGenerate}
        loading={loading}
        error={error}
      />

      {/* Output */}
      {generated && (
        <div style={{ marginTop: "32px" }}>
          {/* Tabs */}
          <div style={{ display: "flex", gap: "0", borderBottom: "1px solid #0ff2", marginBottom: "24px" }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                padding: "10px 20px",
                background: activeTab === tab ? "#0a1628" : "transparent",
                border: "none",
                borderBottom: activeTab === tab ? "2px solid #00eaff" : "2px solid transparent",
                color: activeTab === tab ? "#00eaff" : "#4a9eff",
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                cursor: "pointer",
                textTransform: "uppercase"
              }}>
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "flashcards" && <FlashCards cards={flashcards} />}
          {activeTab === "quiz" && <Quiz questions={quiz} />}
          {activeTab === "summary" && <Summary points={summary} />}
        </div>
      )}
    </div>
  )
}
