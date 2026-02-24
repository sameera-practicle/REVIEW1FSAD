import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Navbar() {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 80px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
  };

  const logoStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#2563eb"
  };

  const linkStyle = {
    marginLeft: "25px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "500"
  };

  const buttonStyle = {
    marginLeft: "25px",
    padding: "8px 16px",
    borderRadius: "6px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer"
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={navStyle}>

      <div style={logoStyle}>
        WorkshopPro
      </div>

      <div>

        <Link to="/" style={linkStyle}>Home</Link>

        {!user && (
          <>
            <Link to="/login" style={linkStyle}>Login</Link>
            <Link to="/register" style={linkStyle}>Sign Up</Link>
          </>
        )}

        {user && user.role === "admin" && (
          <Link to="/admin" style={linkStyle}>Admin Dashboard</Link>
        )}

        {user && user.role === "user" && (
          <Link to="/user" style={linkStyle}>User Dashboard</Link>
        )}

        {user && (
          <button style={buttonStyle} onClick={handleLogout}>
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;