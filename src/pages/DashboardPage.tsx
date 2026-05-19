import {
  useState,
  useEffect
} from "react";

import Navbar from "../components/NavBar";

function DashboardPage() {

  const [profile, setProfile] =
    useState<any>(null);

  async function getProfile() {

    const token =
      localStorage.getItem("token");

    const response = await fetch(
      "http://127.0.0.1:8002/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data =
      await response.json();

    setProfile(data);
  }

  function logoutUser() {

    localStorage.removeItem("token");

    window.location.href = "/";
  }

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (!token) {

      window.location.href = "/";

      return;
    }

    getProfile();

  }, []);

  return (

    <div className="container">

      <Navbar />

      <h1>Dashboard</h1>

      <br />

      {profile && (

        <div>

          <h2>User Information</h2>

          <p>
            Username: {profile.username}
          </p>

          <p>
            Role: {profile.role || "user"}
          </p>

          <p>
            User ID: {profile.id}
          </p>

          <button onClick={logoutUser}>
            Logout
          </button>

        </div>

      )}

    </div>
  );
}

export default DashboardPage;