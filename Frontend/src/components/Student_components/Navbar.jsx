import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import '../../css/Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light rounded-top">
        <div className="container-fluid">
          <a className="navbar-brand fs-2" href="#">School Name</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item border-end border-2 border-primary">
                <Link className="nav-link fs-4" to="/">Home</Link> {/* Changed to Link */}
              </li>
              <li className="nav-item border-end border-2 border-primary">
                <Link className="nav-link fs-4" to="/attendance">Attendance</Link> {/* Changed to Link, fixed typo */}
              </li>
              <li className="nav-item border-end border-2 border-primary">
                <Link className="nav-link fs-4" to="/grades">Grades</Link> {/* Changed to Link */}
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="/announcements">Announcements</Link> {/* Changed to Link */}
              </li>
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
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
          </div>
        </div>
      </nav>
    </>
  );
}