// src/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [owner, setOwner] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // Use full absolute URLs to avoid proxy issues
        const [ownerRes, statsRes] = await Promise.all([
          axios.get("http://localhost:5000/api/home/owner"),
          axios.get("http://localhost:5000/api/home/stats"),
        ]);

        setOwner(ownerRes.data);
        setStats(statsRes.data);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setErr(error.message || "Unknown error");
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading)
    return <h2 style={{ textAlign: "center", marginTop: 60 }}>Loading...</h2>;
  if (err)
    return (
      <div style={{ textAlign: "center", marginTop: 40, color: "red" }}>
        Error: {err}
      </div>
    );

  return (
    <div className="home-container" style={{ padding: 20 }}>
      <h1>🏠 Smart Rent Manager</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          flexWrap: "wrap",
          marginTop: 30,
        }}
      >
        <div
          style={{
            width: 300,
            padding: 20,
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>👤 Owner Info</h3>
          <p>
            <strong>Name:</strong> {owner?.name}
          </p>
          <p>
            <strong>Email:</strong> {owner?.email}
          </p>
          <p>
            <strong>Phone:</strong> {owner?.phone}
          </p>
        </div>

        <div
          style={{
            width: 300,
            padding: 20,
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>🏠 Room Summary</h3>
          <p>
            <strong>Total Rooms:</strong> {stats?.totalRooms}
          </p>
          <p>
            <strong>Occupied:</strong> {stats?.occupied}
          </p>
          <p>
            <strong>Available:</strong> {stats?.available}
          </p>
        </div>

        <div
          style={{
            width: 300,
            padding: 20,
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>💰 Rent Summary</h3>
          <p>
            <strong>Total Rent:</strong> ₹{stats?.totalRent}
          </p>
          <p>
            <strong>Pending Rent:</strong> ₹{stats?.pendingRent}
          </p>
        </div>
      </div>
    </div>
  );
}
