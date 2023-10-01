import React from "react";
import "./Navbar.scss";
import AddProperty from "./AddProperty";

export default function Navbar({ setPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" onClick={() => setPage("PropertyList")}>
        <span style={{ color: "red" }}>SMOOTH</span>MOVE.INC
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a
            class="nav-item nav-link active"
            onClick={() => setPage("PropertyList")}
          >
            Home
          </a>
          <a class="nav-item nav-link" onClick={() => setPage("AddProperty")}>
            Add Property
          </a>
          <a class="nav-item nav-link" onClick={() => setPage("LoginSignup")}>
            Login/Signup
          </a>
        </div>
      </div>
    </nav>
  );
}
