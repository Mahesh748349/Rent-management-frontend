import React from "react";

const RentCard = ({ tenant }) => {
  return (
    <div className="rent-card">
      <h3>{tenant.name}</h3>
      <p>Month: {tenant.month}</p>
      <p>Rent: ₹{tenant.rent}</p>
      <p>Bills: ₹{tenant.bills}</p>
      <p>Status: {tenant.status}</p>
    </div>
  );
};

export default RentCard;
