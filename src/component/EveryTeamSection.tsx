import Image from "next/image";

export default function EveryTeamSection() {
  return (
    <section className="every-team-section">
      <div className="every-team-container">
        <div className="every-team-header">
          <h2 className="every-team-title">Every team works better in Jira</h2>
          <p className="every-team-subtitle">
            Bring design, marketing, HR, operations, and engineering into one
            shared place to plan work, track progress, and move faster together.
          </p>
          <a href="/signup" className="every-team-btn">
            Get started for free &rarr;
          </a>
        </div>

        <div className="every-team-visual">
          <Image
            src="/jira-board.png"
            alt="Every team works better in Jira board"
            width={1200}
            height={488}
            className="every-team-image"
            priority
          />
        </div>
      </div>
    </section>
  );
}
