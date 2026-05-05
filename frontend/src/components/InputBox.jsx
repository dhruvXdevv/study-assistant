export default function InputBox({ text, setText, onGenerate, loading, error }) {
  return (
    <div>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Paste your study text here... (lecture notes, textbook paragraphs, any topic)"
        rows={7}
        style={{
          width: "100%",
          background: "#0a1628",
          border: "1px solid #0ff3",
          borderRadius: "8px",
          color: "#c8e8ff",
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "13px",
          padding: "16px",
          resize: "vertical",
          outline: "none",
          lineHeight: "1.7",
          boxSizing: "border-box"
        }}
      />
      {error && (
        <p style={{ color: "#f87171", fontSize: "12px", margin: "8px 0 0" }}>⚠ {error}</p>
      )}
      <button
        onClick={onGenerate}
        disabled={loading}
        style={{
          marginTop: "12px",
          background: loading ? "#0a1628" : "#00eaff18",
          border: "1px solid #00eaff",
          color: "#00eaff",
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "13px",
          letterSpacing: "2px",
          padding: "12px 32px",
          borderRadius: "6px",
          cursor: loading ? "not-allowed" : "pointer",
          width: "100%",
          transition: "all 0.2s"
        }}
      >
        {loading ? "⟳ GENERATING..." : "⚡ GENERATE STUDY SET"}
      </button>
    </div>
  )
}
