import React from "react";
import "./Components.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="font-style">Welcome to Smart Rent Manager</h1>
        <p className="font-style">
          Manage your tenants, rents, and rooms easily.
        </p>
        <p className="subtext ">Click Login above to get started.</p>
      </div>
    </div>
  );
};

export default Home;
