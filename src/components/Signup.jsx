import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css"; // You can keep same CSS used for login page

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="overlay"></div>
      <div
        className="auth-container"
        // style={{
        //   backgroundImage:
        //     "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1470&q=80')",
        // }}
      >
        <div className="auth-box">
          <h2>Create an Account</h2>
          <p className="subtitle">
            Join SmartRent and manage your properties effortlessly 🏘️
          </p>

          <form className="auth-form">
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" required />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter your password"
                required
              />
            </div>

            <button type="submit" className="auth-btn">
              Sign Up
            </button>
          </form>

          <p className="footer-text">
            Already have an account?{" "}
            <Link to="/login" className="auth-link">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
