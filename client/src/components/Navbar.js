// import React from "react";
// import "./Navbar.scss";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";

// export default function Navbar({ setPage, userName, logout }) {
//   return (
//     <nav className="navbar navbar-expand navbar-light bg-light">
//       <a className="navbar-brand" onClick={() => setPage("PropertyList")}>
//         <span className="name_red">
//           <FontAwesomeIcon icon={faHouse} />
//           Smooth
//         </span>
//         MOVE
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNavAltMarkup"
//         aria-controls="navbarNavAltMarkup"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//         <div className="navbar-nav">
//           <a
//             className="nav-item nav-link active"
//             onClick={() => setPage("PropertyList")}
//           >
//             Home
//           </a>
//           <a
//             className="nav-item nav-link"
//             onClick={() => {
//               if (userName) {
//                 setPage("AddProperty");
//               } else {
//                 window.alert("Please log in to add a property.");
//                 setPage("LoginSignup");
//               }
//             }}
//           >
//             Add Property
//           </a>

//           {userName ? (
//             <div className="user_status">
//               <a className="nav-item nav-link user_name">
//                 Welcome: {userName.firstName}
//               </a>
//               <a className="nav-item nav-link logout" onClick={logout}>
//                 Logout
//               </a>
//             </div>
//           ) : (
//             <a
//               className="nav-item nav-link"
//               onClick={() => setPage("LoginSignup")}
//             >
//               Login/Signup
//             </a>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

import React, { useState } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ setPage, userName, logout }) {
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
    width: "20px",
    height: "20px",
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
        MOVE.INC
      </div>

      <div class="dropdown">
        <button
          // class="btn btn-secondary dropdown-toggle"
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
            <div style={circleStyles}></div>
          </div>
        </button>
        <ul
          class="dropdown-menu dropdown-menu-end"
          style={{ margin: "10px 0" }}
        >
          <li>
            <a class="dropdown-item" onClick={() => setPage("LoginSignup")}>
              Login {/* Add the Login link here */}
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
