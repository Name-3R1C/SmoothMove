import React from "react";
import "./Header.scss";
import Navbar from "./Navbar";

function Header({ setPage, userName, logout }) {
  return (
    <header className="header">
      <div className="container">
        <Navbar setPage={setPage} userName={userName} logout={logout} />
        {/* Put any other header content here! - Jay S*/}
      </div>
    </header>
  );
}

export default Header;
