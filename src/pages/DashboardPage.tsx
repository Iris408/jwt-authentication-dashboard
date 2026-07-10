import { useState, useEffect } from "react";

import Navbar from "../components/NavBar";

type Profile = {
  id: number;
  username: string;
  role?: string;
};

function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let ignore = false;

    async function getProfile() {
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/";
        return;
      }

      const API_URL = (
        import.meta.env.VITE_API_URL || "https://mini-user-api.onrender.com"
      ).replace(/\/+$/, "");

      try {
        const response = await fetch(`${API_URL}/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          localStorage.removeItem("token");
          window.location.href = "/";
          return;
        }

        if (!ignore) {
          setProfile(data.user);
        }
      } catch (error) {
        console.error("Profile request failed:", error);

        if (!ignore) {
          setErrorMessage("Unable to connect to backend API");
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    getProfile();

    return () => {
      ignore = true;
    };
  }, []);

  function logoutUser() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  function goToAdminPage() {
    window.location.href = "/admin";
  }

  const roleLabel = profile?.role || "User";
  const isAdmin = roleLabel.toLowerCase() === "admin";

  return (
    <div className="container dashboard-container">
      <Navbar />

      <section className="dashboard-header">
        <div>
          <p className="dashboard-eyebrow">Protected Route</p>
          <h1>Dashboard</h1>
          <p className="dashboard-subtitle">
            This page is only available after successful JWT authentication.
          </p>
        </div>

        <div className="dashboard-status-pill">
          Authenticated
        </div>
      </section>

      {isLoading && (
        <div className="dashboard-message-card">
          Loading profile information...
        </div>
      )}

      {errorMessage && (
        <div className="dashboard-error-card">
          {errorMessage}
        </div>
      )}

      {profile && (
        <>
          <section className="dashboard-grid">
            <div className="dashboard-card profile-summary-card">
              <div className="profile-avatar">
                {profile.username.charAt(0).toUpperCase()}
              </div>

              <div>
                <p className="card-label">Signed in as</p>
                <h2>{profile.username}</h2>
                <span className={`role-badge ${isAdmin ? "admin-role" : "user-role"}`}>
                  {roleLabel}
                </span>
              </div>
            </div>

            <div className="dashboard-card">
              <p className="card-label">User ID</p>
              <h2>#{profile.id}</h2>
              <p className="card-copy">
                This ID comes from the PostgreSQL user record returned by the backend.
              </p>
            </div>

            <div className="dashboard-card">
              <p className="card-label">JWT Status</p>
              <h2>Token Active</h2>
              <p className="card-copy">
                The frontend sends the stored token in the Authorization header.
              </p>
            </div>
          </section>

          <section className="dashboard-detail-grid">
            <div className="dashboard-card large-card">
              <h2>Authentication Flow</h2>

              <div className="flow-list">
                <div>
                  <span>01</span>
                  <p>User logs in with username and password.</p>
                </div>

                <div>
                  <span>02</span>
                  <p>FastAPI verifies the user and returns a JWT access token.</p>
                </div>

                <div>
                  <span>03</span>
                  <p>React stores the token and uses it to request protected data.</p>
                </div>
              </div>
            </div>

            <div className="dashboard-card action-card">
              <h2>Quick Actions</h2>

              <button onClick={goToAdminPage} disabled={!isAdmin}>
                Open Admin Page
              </button>

              {!isAdmin && (
                <p className="card-copy">
                  Admin access is only available to users with the admin role.
                </p>
              )}

              <button onClick={logoutUser} className="secondary-button">
                Logout
              </button>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default DashboardPage;