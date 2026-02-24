import React from "react";
import "../style.css";

function User({ workshops }) {

  return (
    <div className="user-container">

      <h1 className="dashboard-title">User Dashboard</h1>

      {/* Stats Section */}
      <div className="stats-container">

        <div className="stat-card">
          <h2>{workshops.length}</h2>
          <p>Available Workshops</p>
        </div>

        <div className="stat-card">
          <h2>3</h2>
          <p>Registered</p>
        </div>

      </div>

      {/* Workshops Table */}
      <div className="workshop-section">
        <h2>Available Workshops</h2>

        {workshops.length === 0 ? (
          <p className="no-data">No workshops available right now.</p>
        ) : (
          <table className="workshop-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Trainer</th>
              </tr>
            </thead>
            <tbody>
              {workshops.map((workshop, index) => (
                <tr key={index}>
                  <td>{workshop.title}</td>
                  <td>{workshop.date}</td>
                  <td>{workshop.trainer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>

    </div>
  );
}

export default User;