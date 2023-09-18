import React, { useRef } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/configurefile";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import GoogleButton from "react-google-button";

function Login() {
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const Provider = new GoogleAuthProvider();

  async function handleLogin() {
    await signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passRef.current.value
    );
    navigate("/profile");
  }
  async function handleGoogleLogin() {
    await signInWithPopup(auth, Provider);
    navigate("/profile");
  }

  return (
    <div className="login">
      <h2>Login</h2>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <p>
          <input
            type="email"
            placeholder="Enter your email here"
            ref={emailRef}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Enter your password"
            ref={passRef}
          />
        </p>
      </div>
      <button onClick={handleLogin}>login</button>
      <p>
        Don't have an account !<Link to={"/register"}> register here</Link>
      </p>
        <GoogleButton onClick={handleGoogleLogin} />
    </div>
  );
}

export default Login;
