export default function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", fontFamily: "sans-serif" }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/" style={{ color: "#0052cc", textDecoration: "underline", marginTop: "12px" }}>Return to Home</a>
    </div>
  );
}
