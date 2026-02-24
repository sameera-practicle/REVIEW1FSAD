import React, { useState } from "react";
import "./auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }
    alert("Account Created Successfully!");
  };

  return (
    <div className="auth-container">

      <div className="auth-left">
        <h1>Create Your Account</h1>
        <p>Join thousands of learners and start growing today.</p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2>Sign Up</h2>

          <input
            className="auth-input"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-btn" onClick={handleRegister}>
            Sign Up
          </button>

          <div className="auth-link">
            <a href="/login">Already have an account? Login</a>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Register;