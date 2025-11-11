import React, { useState } from "react";
import RentCard from "./RentCard";

const OwnerDashboard = () => {
  const [tenants, setTenants] = useState([
    {
      name: "Ramesh",
      month: "Nov 2025",
      rent: 10000,
      bills: 800,
      status: "Paid",
    },
    {
      name: "Suresh",
      month: "Nov 2025",
      rent: 9000,
      bills: 700,
      status: "Pending",
    },
  ]);

  return (
    <div className="dashboard">
      <h2>Owner Dashboard</h2>
      <div className="rent-list">
        {tenants.map((t, i) => (
          <RentCard key={i} tenant={t} />
        ))}
      </div>
    </div>
  );
};

export default OwnerDashboard;
