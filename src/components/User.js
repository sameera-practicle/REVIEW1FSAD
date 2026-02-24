import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function User({ workshops }) {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <h2>User Panel</h2>
        <Link to="/user">Dashboard</Link>
        <Link to="/my-workshops">My Workshops</Link>
        <Link to="/certificates">Certificates</Link>
      </div>

      <div className="main">
        <div className="header">User Dashboard</div>

        <div className="stats">
          <div className="stat-card">
            <h3>{workshops.length}</h3>
            <p>Available Workshops</p>
          </div>

          <div className="stat-card">
            <h3>3</h3>
            <p>Registered</p>
          </div>
        </div>

        <div className="table">
          <h3>Available Workshops</h3>
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

export default User;