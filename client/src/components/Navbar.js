import React, { useState } from "react";
import "./Navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({
  setPage,
  userName,
  logout,
  onAddPropertyClick,
  onSignupClick,
  welcomeVisible,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const buttonStyles = {
    backgroundColor: "transparent", // Set the background color to transparent
    border: "none", // Remove border if needed
    padding: 1, // Remove padding
    width: "auto", // Allow button to adjust to content
    marginDown: "10px",
  };
  const menuStyles = {
    borderRadius: "5px", // Rounded edges
    border: "2px solid #ccc", // Add a border
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Add a box shadow
    display: "flex",
    alignItems: "center",
    padding: "5px",
  };
  const circleStyles = {
    backgroundColor: "#ccc",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    marginLeft: "10px", // Add spacing between the circle and icon
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => setPage("PropertyList")}>
        <span className="name_red">
          <FontAwesomeIcon icon={faHouse} />
          Smooth
        </span>
        MOVE
      </div>
      {welcomeVisible && (
        <div className="welcome-message">Welcome to SmoothMove</div>
      )}
      <div>
        {/* Display the user's name here */}
        {userName && (
          <span className="user-name">Welcome, {userName.firstName}</span>
        )}
      </div>

      <div className="dropdown">
        <button
          // className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={buttonStyles}
        >
          <div
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            style={menuStyles}
          >
            {menuOpen ? (
              <FontAwesomeIcon icon={faBars} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )}
            <div style={circleStyles}>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end"
          style={{ margin: "10px 0" }}
        >
          {userName ? (
            <>
              <li>
                <span className="dropdown-item">{`Welcome, ${userName.firstName}`}</span>
              </li>
              <li>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={onAddPropertyClick}
                >
                  Add Property
                </button>
              </li>
              <li>
                <a class="dropdown-item" onClick={logout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a class="dropdown-item" onClick={() => setPage("Login")}>
                  Login
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={onSignupClick}
                >
                  Sign Up
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
