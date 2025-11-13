import React, { useState, useEffect } from "react";
import api from "./services/api";

const OwnerDashboard = () => {
  const [owners, setOwners] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  });

  // Fetch all owners
  useEffect(() => {
    api
      .get("/api/owners")
      .then((res) => setOwners(res.data))
      .catch((err) => console.error("Error fetching owners:", err));
  }, []);

  // Add a new owner
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/owners", form);
      setOwners([...owners, res.data]);
      setForm({ name: "", email: "", contactNumber: "", address: "" });
      alert("Owner added successfully!");
    } catch (err) {
      console.error(err);
      alert("Error adding owner");
    }
  };

  return (
    <div>
      <h2>Owner Dashboard</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={form.contactNumber}
          onChange={(e) => setForm({ ...form, contactNumber: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        <button type="submit">Add Owner</button>
      </form>

      <h3>All Owners</h3>
      <ul>
        {owners.map((o) => (
          <li key={o._id}>
            {o.name} — {o.email} — {o.contactNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OwnerDashboard;
