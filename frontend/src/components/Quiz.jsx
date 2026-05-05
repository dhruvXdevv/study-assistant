import { useState } from "react"

export default function Quiz({ questions }) {
  const [selected, setSelected] = useState({})
  const [score, setScore] = useState(null)

  const choose = (qi, option) => {
    if (score !== null) return
    setSelected(prev => ({ ...prev, [qi]: option }))
  }

  const submit = () => {
    let correct = 0
    questions.forEach((q, i) => {
      if (selected[i] === q.answer) correct++
    })
    setScore(correct)
  }

  const reset = () => { setSelected({}); setScore(null) }

  return (
    <div>
      {questions.map((q, i) => (
        <div key={i} style={{
          background: "#0a1628",
          border: "1px solid #0ff2",
          borderRadius: "8px",
          padding: "18px",
          marginBottom: "14px"
        }}>
          <p style={{ color: "#00eaff", fontSize: "13px", marginBottom: "14px", lineHeight: "1.6" }}>
            <span style={{ color: "#7c3aff", marginRight: "8px" }}>Q{i + 1}.</span>
            {q.question}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            {q.options.map((opt, j) => {
              let borderColor = "#0ff2"
              let bgColor = "transparent"
              if (score !== null) {
                if (opt === q.answer) { borderColor = "#4ade80"; bgColor = "#4ade8015" }
                else if (selected[i] === opt && opt !== q.answer) { borderColor = "#f87171"; bgColor = "#f8717115" }
              } else if (selected[i] === opt) {
                borderColor = "#00eaff"; bgColor = "#00eaff15"
              }
              return (
                <button key={j} onClick={() => choose(i, opt)} style={{
                  background: bgColor,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "6px",
                  color: "#c8e8ff",
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "12px",
                  padding: "10px 12px",
                  cursor: score !== null ? "default" : "pointer",
                  textAlign: "left",
                  transition: "all 0.15s"
                }}>
                  {opt}
                </button>
              )
            })}
          </div>
        </div>
      ))}

      {score === null ? (
        <button onClick={submit} disabled={Object.keys(selected).length < questions.length} style={{
          background: "#00eaff18",
          border: "1px solid #00eaff",
          color: "#00eaff",
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "12px",
          letterSpacing: "2px",
          padding: "12px 28px",
          borderRadius: "6px",
          cursor: "pointer",
          width: "100%"
        }}>
          SUBMIT QUIZ
        </button>
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p style={{ color: "#00eaff", fontSize: "22px", marginBottom: "8px" }}>
            {score}/{questions.length} CORRECT
          </p>
          <p style={{ color: "#4a9eff", fontSize: "12px", marginBottom: "16px" }}>
            {score === questions.length ? "🔥 Perfect score!" : score >= questions.length / 2 ? "👍 Good job!" : "📚 Keep studying!"}
          </p>
          <button onClick={reset} style={{
            background: "transparent",
            border: "1px solid #4a9eff",
            color: "#4a9eff",
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "11px",
            padding: "10px 24px",
            borderRadius: "6px",
            cursor: "pointer"
          }}>RETRY</button>
        </div>
      )}
    </div>
  )
}
