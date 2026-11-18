
import Navbar from "../component/Navbar";
import Hero from "../component/HeroSection";
import Features from "../component/Feature";
import Footer from "../component/Footer";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Features />

                <section className="teamwork-section" id="how-it-works">
          <div className="teamwork-container">
            {/* Left Content */}
            <div className="teamwork-content">
              <h3 className="teamwork-eyebrow">
                <strong>Teamwork</strong> Collection
              </h3>

              <h2 className="teamwork-title">
                EPICpm is better with docs and video
              </h2>

              <p className="teamwork-description">
                EPICpm, part of the Teamwork Collection, accelerates team collaboration and decision-making. Enhance EPICpm with Confluence for specs and context, Loom for async videos and AI notes, and Rovo to uncover team knowledge.
              </p>

              <div className="teamwork-includes">
                <span className="includes-label">INCLUDES</span>
                <div className="product-pills-row">
                 {/* EpicPM */}
                  <div className="product-pill">
                    <span className="product-icon jira-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF">
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
                    </span>
                    <span className="product-name">EPICpm</span>
                  </div>

                  {/* Confluence */}
                  <div className="product-pill">
                    <span className="product-icon confluence-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5.5 14C5.5 11 7.5 9.5 9.5 9L14 8C16 7.5 17.5 9 17.5 11C16 11 14.5 12 14 13.5L12.5 17.5C12 19 10 20 8 19.5L6 19C5.5 17.5 5.5 15.5 5.5 14Z" fill="#FFFFFF" />
                      </svg>
                    </span>
                    <span className="product-name">Confluence</span>
                  </div>

                  {/* Loom */}
                  <div className="product-pill">
                    <span className="product-icon loom-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="3.5" fill="#FFFFFF" />
                        <path d="M12 2V6M12 18V22M2 12H6M18 12H22M4.9 4.9L7.8 7.8M16.2 16.2L19.1 19.1M4.9 19.1L7.8 16.2M16.2 7.8L19.1 4.9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="product-name">Loom</span>
                  </div>

                  {/* Rovo */}
                  <div className="product-pill">
                    <span className="product-icon rovo-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 3L18.5 6.8V14.2L12 18L5.5 14.2V6.8L12 3Z" fill="#6554C0" />
                        <path d="M12 3L18.5 6.8L12 10.5L5.5 6.8L12 3Z" fill="#36B37E" />
                        <path d="M18.5 6.8V14.2L12 18V10.5L18.5 6.8Z" fill="#FFAB00" />
                        <path d="M5.5 6.8L12 10.5V18L5.5 14.2V6.8Z" fill="#FF5630" />
                      </svg>
                    </span>
                    <span className="product-name">Rovo</span>
                  </div>
                </div>
              </div>

              <div className="teamwork-actions">
                <a href="/signup" className="outline-pill-btn">
                  Try them all free <span>→</span>
                </a>
                <a href="#pricing" className="text-arrow-link">
                  See pricing <span>→</span>
                </a>
              </div>
            </div>

            {/* Right Visual Graphic with Connected Cards */}
            <div className="teamwork-visual">
              <div className="visual-grid-canvas">
                {/* Jira Card */}
                <div className="floating-card jira-card">
                  <div className="card-header">
                    <span className="mini-icon jira-mini"></span>
                    <span>EPICpm work item</span>
                  </div>
                  <div className="card-body">
                    <div className="item-tag">SUM-01</div>
                    <div className="item-meta">
                      <span>1</span>
                      <span className="priority-arrow">∧</span>
                      <span className="avatar-chip">🧑‍💻</span>
                    </div>
                  </div>
                </div>

                {/* Confluence Card */}
                <div className="floating-card confluence-card">
                  <div className="card-header">
                    <span className="mini-icon confluence-mini"></span>
                    <span>Confluence doc</span>
                  </div>
                  <div className="card-body">
                    <div className="doc-preview-bars">
                      <span className="bar green-bar"></span>
                      <span className="bar purple-bar"></span>
                    </div>
                    <div className="doc-lines">
                      <div className="line-row"><span>🔖</span><div className="skeleton-line"></div></div>
                      <div className="line-row"><span>🎥</span><div className="skeleton-line wide"></div></div>
                    </div>
                  </div>
                </div>

                {/* Loom Card */}
                <div className="floating-card loom-card">
                  <div className="card-header">
                    <span className="mini-icon loom-mini"></span>
                    <span>Loom meeting notes</span>
                  </div>
                  <div className="loom-body">
                    <div className="loom-notes">
                      <div className="sticky-note note-yellow"></div>
                      <div className="sticky-note note-green"></div>
                      <div className="sticky-note note-purple"></div>
                    </div>
                    <div className="loom-player">
                      <div className="loom-avatar">👩</div>
                      <div className="play-button">▶</div>
                    </div>
                  </div>
                </div>

                {/* Rovo Chat Card */}
                <div className="floating-card rovo-card">
                  <div className="card-header">
                    <span className="mini-icon rovo-mini"></span>
                    <span>Rovo Chat</span>
                  </div>
                  <div className="rovo-badge">
                    <span>AI</span>
                  </div>
                </div>

                {/* Brainstorm Facilitator Tag */}
                <div className="facilitator-tag">
                  <span>📊</span> Brainstorm Facilitator
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ship faster with <span className="cta-blue-text">agents in EPICpm</span></h2>
          <p>
            Get started for free – no credit card required.
          </p>

          <a href="/signup" className="primary-btn">
            Start for Free
            <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
