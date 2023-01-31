import React from "react";
import logo from "../images/reactjs-icon.svg";
import "../styles/base.css";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav__logo-container">
        <img
          src={logo}
          className="nav__react-logo"
          alt="react atom like logo"
        ></img>
        <h1 className="nav__title">React Facts</h1>
      </div>
      <h2 className="nav__subtitle">React Course - Project 1</h2>
    </nav>
  );
}
