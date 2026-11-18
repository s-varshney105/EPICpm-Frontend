
import {
  LayoutGrid,
  Users,
  ChartNoAxesCombined,
  CalendarCheck,
  ShieldCheck,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Project Organization",
    description:
      "Keep all your projects organized in one central workspace.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together, assign responsibilities, and share updates.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Progress Tracking",
    description:
      "Track project performance and monitor task completion.",
  },
  {
    icon: CalendarCheck,
    title: "Task Management",
    description:
      "Create tasks, set deadlines, and manage priorities easily.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Workspace",
    description:
      "Keep your project information organized and protected.",
  },
  {
    icon: Zap,
    title: "Simple Workflow",
    description:
      "Reduce unnecessary steps and focus on getting work done.",
  },
];

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-heading">
        <span className="section-tag">FEATURES</span>
        <h2>Everything your team needs</h2>
        <p>
          Powerful tools to help you plan, organize, and
          complete your projects.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">
                <Icon size={24} />
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
