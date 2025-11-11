import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("tenant");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Later connect this to backend API (login route)
    console.log("Logging in:", { email, password, role });

    // Simple role-based navigation
    if (role === "owner") navigate("/owner");
    else navigate("/tenant");
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <h6>Enter your E-mail</h6>
        <input
          className="form-control"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <h6>Enter password</h6>
        <input
          className="form-control"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <h6>Who you are?</h6>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="tenant">Tenant</option>
          <option value="owner">Owner</option>
        </select>
        <br />
        <br />
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
