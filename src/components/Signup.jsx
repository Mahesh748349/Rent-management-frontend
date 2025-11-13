import React, { useState } from "react";
import "./Components.css";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "tenant",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", form);
    alert("Signup successful! (Connect backend later)");
  };

  return (
    <div className="d-flex justify-content-center  vh-100 bg-light">
      <div className="form-container">
        <h2 className="signup-heading">Signup</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <h6>Enter Your Name</h6>
          <input
            className="form-control"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <br />
          <h6>Enter Your Email</h6>
          <input
            className="form-control"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <br />

          <h6>Enter password</h6>
          <input
            className="form-control"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <br />
          <h6>Who are you?</h6>
          <select name="role" onChange={handleChange}>
            <option value="tenant">Tenant</option>
            <option value="owner">Owner</option>
          </select>
          <br />
          <br />
          <button className="btn btn-primary signup-btn" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
