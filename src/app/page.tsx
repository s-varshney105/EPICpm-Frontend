
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

        <section className="how-section" id="how-it-works">
          <span className="section-tag">HOW IT WORKS</span>

          <h2>From planning to completion</h2>

          <p>
            Create a project, organize your tasks, and
            collaborate with your team from one place.
          </p>

          <div className="steps-grid">
            <div className="step-card">
              <span>01</span>
              <h3>Create a project</h3>
              <p>Start with a workspace for your next big idea.</p>
            </div>

            <div className="step-card">
              <span>02</span>
              <h3>Organize your tasks</h3>
              <p>Break your work into manageable tasks and deadlines.</p>
            </div>

            <div className="step-card">
              <span>03</span>
              <h3>Track your progress</h3>
              <p>Monitor your team's work and achieve your goals.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to get things done?</h2>
          <p>
            Bring your projects and team together with EpicPM.
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
