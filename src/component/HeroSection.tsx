import SignupForm from "./SignupForm";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Turn plans into agent-ready tasks</h1>
        <p className="hero-description">
          Then build. Orchestrate work across your team and agents, with
          complete context.
        </p>
      </div>

      <div className="hero-signup">
        <SignupForm />
      </div>
    </section>
  );
}