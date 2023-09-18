import React from "react";
import "../styles/profile.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/configurefile";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error is {error.toString()}</div>;
  }
  console.log(user);

  async function handleLogout() {
    await signOut(auth);
    navigate("/");
  }

  return (
    <div className="profile">
      <h2>Profile</h2>

      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <p>UID :{user.uid}</p>
        <p>Email :{user.email}</p>
      </div>

      <button style={{ alignSelf: "flex-start" }} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
