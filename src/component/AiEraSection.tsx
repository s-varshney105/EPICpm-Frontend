import React from "react";
import Image from "next/image";

export default function AiEraSection() {
  return (
    <section className="ai-era-section">
      <div className="ai-era-container">
        {/* Terminal Badge */}
        <div className="ai-era-badge">
          <div className="badge-line-1">Jira for the AI era</div>
          <div className="badge-line-2">
            &gt; all your <span className="cyan-text">context</span>
          </div>
        </div>

        {/* Works With Row */}
        <div className="works-with-block">
          <span className="works-with-label">WORKS WITH</span>
          <div className="works-with-pills">
            <Image
              src="/claud.svg"
              alt="Claude"
              width={91}
              height={32}
              style={{ height: "32px", width: "auto" }}
            />
            <Image
              src="/cursor.svg"
              alt="Cursor"
              width={91}
              height={32}
              style={{ height: "32px", width: "auto" }}
            />
            <Image
              src="/codex.svg"
              alt="Codex"
              width={82}
              height={32}
              style={{ height: "32px", width: "auto" }}
            />
            <Image
              src="/github.svg"
              alt="GitHub Copilot"
              width={158}
              height={32}
              style={{ height: "32px", width: "auto" }}
            />
            <Image
              src="/MCP.svg"
              alt="Any MCP agent"
              width={150}
              height={32}
              style={{ height: "32px", width: "auto" }}
            />
          </div>
        </div>

        {/* 3-Column Features Grid */}
        <div className="ai-era-grid">
          {/* Column 1 */}
          <div className="ai-era-col">
            <div className="ai-era-icon">
              <Image
                src="/@.svg"
                alt="Embed agents"
                width={44}
                height={44}
                style={{ width: "44px", height: "44px" }}
              />
            </div>
            <h3 className="ai-era-title">
              Embed agents in your existing workflow
            </h3>
            <p className="ai-era-desc">
              Assign work to your favorite coding agent from Jira or bring context
              to your AI stack with our MCP and CLI.
            </p>
          </div>

          {/* Column 2 */}
          <div className="ai-era-col">
            <div className="ai-era-icon">
              <Image
                src="/CLI.svg"
                alt="Teamwork Graph CLI"
                width={44}
                height={44}
                style={{ width: "44px", height: "44px" }}
              />
            </div>
            <h3 className="ai-era-title">Teamwork Graph CLI</h3>
            <p className="ai-era-desc">
              Give AI coding agents terminal access to your Teamwork Graph so they
              can move from context to action.
            </p>
          </div>

          {/* Column 3 */}
          <div className="ai-era-col">
            <div className="ai-era-icon">
              <Image
                src="/scale.svg"
                alt="Scale AI responsibly"
                width={44}
                height={44}
                style={{ width: "44px", height: "44px" }}
              />
            </div>
            <h3 className="ai-era-title">Scale AI responsibly</h3>
            <p className="ai-era-desc">
              Stay in control with an audit trail that keeps teams and agents
              moving faster and in the same direction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
