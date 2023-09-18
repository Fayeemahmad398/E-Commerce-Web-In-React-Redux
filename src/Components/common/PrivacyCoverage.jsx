import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { Navigate, Outlet } from "react-router";
import { auth } from "../../firebase/configurefile";

function PrivacyCoverage() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
export default PrivacyCoverage;
