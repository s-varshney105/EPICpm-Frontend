import Image from "next/image";

const aiFeatures = [
  {
    image: "/Teamwork_graph.png",
    title: "Teamwork Graph",
    description:
      "Better context = fewer tokens. Connect Atlassian’s context graph, the Teamwork Graph to your entire stack and deliver context to your favorite AI tools via the MCP or CLI.",
    linkText: "Explore Teamwork Graph →",
    linkHref: "#",
  },
  {
    image: "/AI_serach.png",
    title: "AI Search",
    description:
      "Use enterprise search to find anything across Jira, Confluence, and any connected app from a single search bar. Get real answers, not just a list of links.",
    linkText: "Explore Teamwork Graph →",
    linkHref: "#",
  },
  {
    image: "/ROVO.png",
    title: "Rovo",
    description:
      "AI teammates that join your work to research, draft, and take action across your tools – right inside Jira, ready when you are.",
    linkText: "Meet Rovo →",
    linkHref: "#",
  },
];

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="ai-features-header">
          <h2 className="ai-features-main-title">More than project management</h2>
          <p className="ai-features-main-subtitle">
            Turn your system of record into a system of action. Every Jira plan
            comes with the AI tools you need to activate your team, where ever
            they work.
          </p>
        </div>

        <div className="ai-features-grid">
          {aiFeatures.map((item) => (
            <div className="ai-feature-card" key={item.title}>
              <div className="ai-feature-image-wrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={600}
                  className="ai-feature-image"
                />
              </div>

              <h3 className="ai-feature-title">{item.title}</h3>
              <p className="ai-feature-description">{item.description}</p>
              <a href={item.linkHref} className="ai-feature-link">
                {item.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
