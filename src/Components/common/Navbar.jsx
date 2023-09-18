import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="brand">E-commerce-web</div>
      <div className="nav-items">
        <div className="nav-item">
          <Link to={"/"}>Product</Link>
        </div>
        <div className="nav-item">
          <Link to={"/about"}>About</Link>
        </div>

        <div className="nav-item">
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div className="nav-item">
          <Link to={"/profile"}>Profile</Link>
        </div>
      </div>
    </nav>
  );
}
