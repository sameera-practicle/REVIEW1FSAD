import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./style.css";


import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin";
import User from "./components/User";

function App() {
  const [workshops, setWorkshops] = useState([]);

  return (
    <BrowserRouter>
      <nav className="navbar">
        <div>
          <Link to="/">WorkshopApp</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/user">User</Link>
        </div>
      </nav>





    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={<Admin workshops={workshops} setWorkshops={setWorkshops} />}
        />
        <Route
          path="/user"
          element={<User workshops={workshops} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;