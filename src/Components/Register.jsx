import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/configurefile";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passRef = useRef();

  async function HandleSignup() {
    // console.log(emailRef.current.value,passRef.current.value);

    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      );
      navigate("/profile");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="login">
      <h2>Register</h2>
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
      <button onClick={HandleSignup}>Register</button>
      <p>
        Already have an account !<Link to={"/login"}> login</Link>
      </p>
    </div>
  );
}

export default Register;
