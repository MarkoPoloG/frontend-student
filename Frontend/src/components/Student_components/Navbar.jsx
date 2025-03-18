import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Navbar.css";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <a className="navbar-brand" href="/">School Name</a>

          <div className="nav-links">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/attendance">Attendance</Link>
            <Link className="nav-link" to="/grades">Grades</Link>
            <Link className="nav-link" to="/announcements">Announcements</Link>
            <Link className="nav-link" to="/resources">Resources</Link>
          </div>
          
          <div className="login-button-wrapper">
            <button onClick={() => setSidebarOpen(true)} className="profile-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button onClick={() => setSidebarOpen(false)} className="close-button">✖</button>
        </div>
        <ul className="sidebar-links">
          <li><Link to="/profile" onClick={() => setSidebarOpen(false)}>Profile</Link></li>
          <li><Link to="/settings" onClick={() => setSidebarOpen(false)}>Settings</Link></li>
          <li><Link to="/logout" onClick={() => setSidebarOpen(false)}>Logout</Link></li>
        </ul>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
    </>
  );
}
