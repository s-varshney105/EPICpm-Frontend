
import { Layers } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="/" className="logo">
            <span className="logo-icon">
              <Layers size={21} />
            </span>
            <span>epicpm</span>
          </a>

          <p>
            Making project management simpler,
            smarter, and more productive.
          </p>
        </div>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="/login">Login</a>
          <a href="/signup">Get Started</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 EpicPM. All rights reserved.</p>
        <p>Made for productive teams.</p>
      </div>
    </footer>
  );
}
