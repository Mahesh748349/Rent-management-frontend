import React, { useState } from "react";

const TenantDashboard = () => {
  const [rentInfo, setRentInfo] = useState({
    name: "Ramesh",
    month: "Nov 2025",
    rent: 10000,
    bills: 800,
    status: "Pending",
  });

  const handlePay = () => {
    alert("Payment Successful! (Later connect backend)");
    setRentInfo({ ...rentInfo, status: "Paid" });
  };

  return (
    <div className="dashboard">
      <h2>Tenant Dashboard</h2>
      <div className="rent-card">
        <p>Month: {rentInfo.month}</p>
        <p>Rent: ₹{rentInfo.rent}</p>
        <p>Bills: ₹{rentInfo.bills}</p>
        <p>Total: ₹{rentInfo.rent + rentInfo.bills}</p>
        <p>Status: {rentInfo.status}</p>
        {rentInfo.status === "Pending" && (
          <button onClick={handlePay}>Pay Now</button>
        )}
      </div>
    </div>
  );
};

export default TenantDashboard;
