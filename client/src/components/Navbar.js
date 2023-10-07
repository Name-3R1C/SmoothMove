import React from "react";
import "./Navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ setPage, userName, logout }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand" onClick={() => setPage("PropertyList")}>
        <span className="name_red">
          <FontAwesomeIcon icon={faHouse} />
          Smooth
        </span>
        MOVE
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
          <a
            className="nav-item nav-link"
            onClick={() => {
              if (userName) {
                setPage("AddProperty");
              } else {
                window.alert("Please log in to add a property.");
                setPage("LoginSignup");
              }
            }}
          >
            Add Property
          </a>

          {userName ? (
            <div className="user_status">
              <a className="nav-item nav-link user_name">
                Welcome: {userName.firstName}
              </a>
              <a className="nav-item nav-link logout" onClick={logout}>
                Logout
              </a>
            </div>
          ) : (
            <a
              className="nav-item nav-link"
              onClick={() => setPage("LoginSignup")}
            >
              Login/Signup
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
