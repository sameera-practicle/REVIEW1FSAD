import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./AuthContext";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Admin from "./components/Admin";
import User from "./components/User";

function App() {
  const [workshops, setWorkshops] = useState([]);

  return (
    <AuthProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin"
            element={
              <Admin
                workshops={workshops}
                setWorkshops={setWorkshops}
              />
            }
          />
          <Route
            path="/user"
            element={<User workshops={workshops} />}
          />
        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;