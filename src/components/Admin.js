import React from "react";
import { Link } from "react-router-dom";   // ✅ MISSING IMPORT
import "../style.css";

function Admin({ workshops }) {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <h2>Admin Panel</h2>

        {/* ✅ Use valid routes */}
        <Link to="/admin">Dashboard</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/registrations">Registrations</Link>
        <Link to="/reports">Reports</Link>
      </div>

      <div className="main">
        <div className="header">Admin Dashboard</div>

        <div className="stats">
          <div className="stat-card">
            <h3>{workshops.length}</h3>
            <p>Total Workshops</p>
          </div>

          <div className="stat-card">
            <h3>120</h3>
            <p>Total Users</p>
          </div>

          <div className="stat-card">
            <h3>45</h3>
            <p>Registrations</p>
          </div>
        </div>

        <div className="table">
          <h3>Workshop List</h3>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Trainer</th>
              </tr>
            </thead>
            <tbody>
              {workshops.map((w, i) => (
                <tr key={i}>
                  <td>{w.title}</td>
                  <td>{w.date}</td>
                  <td>{w.trainer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Admin;