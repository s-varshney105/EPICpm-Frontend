import { Globe, ChevronDown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer" id="about">
      {/* Atlassian Links Section */}
      <div className="footer-links-card">
        {/* Column 1: Logo & Company Links */}
        <div className="footer-col">
          <div className="footer-brand-badge">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF">
              <path
                d="M12 2.5L21.2 7.2L12 11.9L2.8 7.2Z"
                fill="#FFFFFF"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M3 11L12 15.5L21 11"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 14.8L12 19.3L21 14.8"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18.6L12 23.1L21 18.6"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <ul className="footer-link-list">
            <li><a href="#">Company</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">EPIC Foundation</a></li>
            <li><a href="#">Press kit</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Column 2: Products */}
        <div className="footer-col">
          <h4 className="footer-col-title">PRODUCTS</h4>
          <ul className="footer-link-list">
            <li><a href="#">Rovo</a></li>
            <li><a href="#">EPIC</a></li>
            <li><a href="#">EPIC Align</a></li>
            <li><a href="#">EPIC Service Management</a></li>
            <li><a href="#">Confluence</a></li>
            <li><a href="#">Loom</a></li>
            <li><a href="#">Trello</a></li>
            <li><a href="#">Bitbucket</a></li>
          </ul>
          <a href="#" className="footer-action-link">
            See all products <span>→</span>
          </a>
        </div>

        {/* Column 3: Resources */}
        <div className="footer-col">
          <h4 className="footer-col-title">RESOURCES</h4>
          <ul className="footer-link-list">
            <li><a href="#">Technical support</a></li>
            <li><a href="#">Purchasing & licensing</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">EPIC Community</a></li>
            <li><a href="#">Knowledge base</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">My account</a></li>
          </ul>
          <a href="#" className="footer-action-link">
            Create support ticket <span>→</span>
          </a>
        </div>

        {/* Column 4: Learn */}
        <div className="footer-col">
          <h4 className="footer-col-title">LEARN</h4>
          <ul className="footer-link-list">
            <li><a href="#">Partners</a></li>
            <li><a href="#">Training & certification</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Developer resources</a></li>
            <li><a href="#">Enterprise services</a></li>
          </ul>
          <a href="#" className="footer-action-link">
            See all resources <span>→</span>
          </a>
        </div>
      </div>

       {/* Bottom Legal Bar */}
      <div className="footer-legal-bar">
        <p className="copyright-text">Copyright © 2026 EPIC GLOBAL</p>
        <div className="legal-links">
          <a href="#">Privacy policy</a>
          <a href="#">Terms</a>
          <a href="#">Trust Center</a>
          <a href="#">Impressum</a>
          <div className="language-selector">
            <Globe size={16} />
            <span>English</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>
    </footer>
  );
}