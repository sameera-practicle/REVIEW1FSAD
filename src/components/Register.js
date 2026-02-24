import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import "./auth.css";

function Register() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    // Simulate registration
    alert("Account Created Successfully!");

    // Automatically log in as user
    login("user");

    // Redirect to user dashboard
    navigate("/user");
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
            <Link to="/login">
              Already have an account? Login
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Register;