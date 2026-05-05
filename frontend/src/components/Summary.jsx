export default function Summary({ points }) {
  return (
    <div style={{
      background: "#0a1628",
      border: "1px solid #0ff2",
      borderRadius: "8px",
      padding: "20px"
    }}>
      <p style={{ color: "#4a9eff", fontSize: "11px", letterSpacing: "2px", marginBottom: "16px" }}>
        KEY TAKEAWAYS
      </p>
      {points.map((point, i) => (
        <div key={i} style={{
          display: "flex",
          gap: "12px",
          alignItems: "flex-start",
          marginBottom: "14px",
          paddingBottom: "14px",
          borderBottom: i < points.length - 1 ? "1px solid #0ff1" : "none"
        }}>
          <span style={{
            color: "#00eaff",
            fontSize: "11px",
            minWidth: "24px",
            marginTop: "2px"
          }}>0{i + 1}</span>
          <p style={{ color: "#c8e8ff", fontSize: "13px", lineHeight: "1.7" }}>{point}</p>
        </div>
      ))}
    </div>
  )
}
