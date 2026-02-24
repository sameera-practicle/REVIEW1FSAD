import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="nav">
        <div className="logo">WorkshopPro</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/register" className="btn-primary">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>Transform Learning with Online Workshops</h1>
          <p>
            Manage, host, and attend interactive workshops with seamless
            scheduling and real-time engagement.
          </p>
          <div className="hero-buttons">
            <a href="/register" className="btn-primary">Start Free</a>
            <a href="/login" className="btn-outline">Login</a>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://plus.unsplash.com/premium_photo-1737323075401-10760b4608f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwd29ya3Nob3B8ZW58MHx8MHx8fDA%3D"
            alt="Online Learning"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Platform Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Workshop Management</h3>
            <p>Create, schedule and manage sessions easily.</p>
          </div>
          <div className="feature-card">
            <h3>Interactive Learning</h3>
            <p>Live sessions, materials, and engagement tools.</p>
          </div>
          <div className="feature-card">
            <h3>Certification</h3>
            <p>Auto-generate certificates after completion.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div>
          <h2>150+</h2>
          <p>Workshops Conducted</p>
        </div>
        <div>
          <h2>5000+</h2>
          <p>Active Learners</p>
        </div>
        <div>
          <h2>100+</h2>
          <p>Expert Trainers</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Elevate Your Learning?</h2>
        <a href="/register" className="btn-primary large-btn">
          Join Now
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 WorkshopPro. All Rights Reserved.
      </footer>

    </div>
  );
}

export default Home;