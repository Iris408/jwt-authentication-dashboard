import { useState, useEffect } from "react";

import Navbar from "../components/NavBar";

  type Profile = {
    id: number;
    username: string;
    role?: string;
  };

function DashboardPage() {

  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    let ignore = false;

  async function getProfile() {
    const token = localStorage.getItem("token");
    if (!token) { window.location.href = "/"; return; }

    const API_URL = import.meta.env.VITE_API_URL;
    const response = await fetch(`${API_URL}/profile`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      localStorage.removeItem("token");
      window.location.href = "/";
      return;
    }

    const data = await response.json();
    if (!ignore) setProfile(data.user); 
  }

    getProfile();
    return () => { ignore = true; };
  }, []);

  function logoutUser() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <div className="container">
      <Navbar />

      <h1>Dashboard</h1>

      {profile && (
        <div className="info-card">
          <h2>User Information</h2>

          <p>Username: {profile.username}</p>
          <p>Role: {profile.role || "User"}</p>
          <p>User ID: {profile.id}</p>

          <button onClick={logoutUser}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default DashboardPage;