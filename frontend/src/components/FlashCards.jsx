import { useState } from "react"

export default function FlashCards({ cards }) {
  const [flipped, setFlipped] = useState({})

  const toggle = (i) => setFlipped(prev => ({ ...prev, [i]: !prev[i] }))

  return (
    <div>
      <p style={{ color: "#4a9eff", fontSize: "11px", marginBottom: "16px", letterSpacing: "1px" }}>
        CLICK A CARD TO REVEAL THE ANSWER
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            style={{
              background: flipped[i] ? "#0a2a1a" : "#0a1628",
              border: `1px solid ${flipped[i] ? "#4ade8055" : "#0ff2"}`,
              borderRadius: "8px",
              padding: "18px",
              cursor: "pointer",
              minHeight: "100px",
              transition: "all 0.2s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <p style={{
              fontSize: "10px",
              color: flipped[i] ? "#4ade80" : "#4a9eff",
              letterSpacing: "2px",
              marginBottom: "8px"
            }}>
              {flipped[i] ? "ANSWER" : `Q ${i + 1}`}
            </p>
            <p style={{ fontSize: "13px", color: "#c8e8ff", lineHeight: "1.6" }}>
              {flipped[i] ? card.answer : card.question}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
