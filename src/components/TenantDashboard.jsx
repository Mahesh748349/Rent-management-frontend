import React, { useState, useEffect } from "react";
import api from "./services/api";

const TenantDashboard = () => {
  const [tenants, setTenants] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    room: "",
  });

  useEffect(() => {
    api
      .get("/api/tenants")
      .then((res) => setTenants(res.data))
      .catch((err) => console.error("Error fetching tenants:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/tenants", form);
      setTenants([...tenants, res.data]);
      setForm({ name: "", email: "", phone: "", room: "" });
      alert("Tenant added successfully!");
    } catch (err) {
      console.error(err);
      alert("Error adding tenant");
    }
  };

  return (
    <div>
      <h2>Tenant Dashboard</h2>

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
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Room ID"
          value={form.room}
          onChange={(e) => setForm({ ...form, room: e.target.value })}
        />
        <button type="submit">Add Tenant</button>
      </form>

      <h3>All Tenants</h3>
      <ul>
        {tenants.map((t) => (
          <li key={t._id}>
            {t.name} — {t.email} — Room: {t.room ? t.room.roomNumber : "N/A"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TenantDashboard;
