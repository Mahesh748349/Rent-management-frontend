import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [role, setRole] = useState("tenant");

  return (
    <div className="login-page">
      <div className="overlay"></div>

      <div className="login-container">
        <h2 className="login-title">🏠 Smart Rent Portal</h2>
        <p className="login-subtitle">
          Simplify your rental life — manage payments, tenants, and rooms
          easily.
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Login as</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="owner">Owner</option>
              <option value="tenant">Tenant</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success w-100 login-btn">
            Login
          </button>

          <p className="login-footer">
            New here? <a href="/signup">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
