import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        {/* Brand / Home link */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          🏠 Smart Rent Manager
        </Link>

        {/* Navbar toggler for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="navbar-nav d-flex flex-row gap-3">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <Link className="nav-link nav-btn" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="btn btn-primary nav-btn" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="btn btn-outline-light nav-btn" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
