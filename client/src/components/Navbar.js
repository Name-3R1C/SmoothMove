import React from "react";
import "./Navbar.scss";
import AddProperty from "./AddProperty";

export default function Navbar({ setPage, userName, logout }) {

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand" onClick={() => setPage("PropertyList")}>
        <span className="name_red">SMOOTH</span>MOVE.INC
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
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a
            className="nav-item nav-link active"
            onClick={() => setPage("PropertyList")}
          >
            Home
          </a>
          <a className="nav-item nav-link" onClick={() => setPage("AddProperty")}>
            Add Property
          </a>

          {userName ? 
          <div className="user_status">
            <a className="nav-item nav-link user_name">Welcome: {userName.firstName}</a>
            <a className="nav-item nav-link logout" onClick={logout}>Logout</a>
          </div>  
            : <a className="nav-item nav-link" onClick={() => setPage("LoginSignup")}>
            Login/Signup
          </a>}
        </div>
      </div>
    </nav>
  );
}
