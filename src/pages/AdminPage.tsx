import { useState, useEffect } from "react";

import Navbar from "../components/NavBar";

type AdminUser = {
  id: number;
  username: string;
  role?: string;
};

function AdminPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function getUsers() {
    const token = localStorage.getItem("token");
    const API_URL = (
      import.meta.env.VITE_API_URL || "https://mini-user-api.onrender.com"
    ).replace(/\/+$/, "");

    if (!token) {
      window.location.href = "/";
      return;
    }

    try {
      setIsLoading(true);
      setErrorMessage("");

      const response = await fetch(`${API_URL}/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.detail || "Unable to load users");
        return;
      }

      setUsers(Array.isArray(data) ? data : data.users || []);
    } catch (error) {
      console.error("Admin users request failed:", error);
      setErrorMessage("Unable to connect to backend API");
    } finally {
      setIsLoading(false);
    }
  }

  function logoutUser() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
    }
  }, []);

  const adminUsers = users.filter(
    (user) => user.role?.toLowerCase() === "admin"
  );

  const standardUsers = users.filter(
    (user) => user.role?.toLowerCase() !== "admin"
  );

  return (
    <div className="container admin-container">
      <Navbar />

      <section className="admin-header">
        <div>
          <p className="dashboard-eyebrow">Admin Route</p>
          <h1>Admin Panel</h1>
          <p className="dashboard-subtitle">
            Manage and review user accounts returned from the protected FastAPI
            admin endpoint.
          </p>
        </div>

        <div className="dashboard-status-pill">
          Admin Access
        </div>
      </section>

      <section className="admin-stats-grid">
        <div className="dashboard-card">
          <p className="card-label">Total Users</p>
          <h2>{users.length}</h2>
        </div>

        <div className="dashboard-card">
          <p className="card-label">Admin Users</p>
          <h2>{adminUsers.length}</h2>
        </div>

        <div className="dashboard-card">
          <p className="card-label">Standard Users</p>
          <h2>{standardUsers.length}</h2>
        </div>
      </section>

      <section className="admin-toolbar">
        <button onClick={getUsers}>
          {isLoading ? "Loading..." : "Refresh Users"}
        </button>

        <button onClick={logoutUser} className="secondary-button">
          Logout
        </button>
      </section>

      {errorMessage && (
        <div className="dashboard-error-card">
          {errorMessage}
        </div>
      )}

      <section className="admin-users-section">
        <div className="admin-section-header">
          <h2>User Accounts</h2>
          <p>
            Data loaded from <strong>/users</strong> using a JWT bearer token.
          </p>
        </div>

        <div className="admin-user-grid">
          {users.map((user) => {
            const roleLabel = user.role || "User";
            const isAdmin = roleLabel.toLowerCase() === "admin";

            return (
              <div key={user.id} className="admin-user-card">
                <div className="profile-avatar small-avatar">
                  {user.username.charAt(0).toUpperCase()}
                </div>

                <div className="admin-user-info">
                  <h3>{user.username || "Unknown User"}</h3>
                  <p>User ID: #{user.id}</p>

                  <span className={`role-badge ${isAdmin ? "admin-role" : "user-role"}`}>
                    {roleLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default AdminPage;