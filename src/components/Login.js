import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Example logic (you can change later)
    if (email === "admin@gmail.com") {
      navigate("/admin");   // Go to Admin Dashboard
    } else {
      navigate("/user");    // Go to User Dashboard
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-left">
        <h1>Welcome Back!</h1>
        <p>Access your dashboard and manage your workshops.</p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2>Login</h2>

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

          <button className="auth-btn" onClick={handleLogin}>
            Login
          </button>

        </div>
      </div>

    </div>
  );
}

export default Login;