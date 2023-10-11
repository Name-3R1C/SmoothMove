import React from "react";
import "./HeroSectionPicBox.scss";

function HeroSectionPicBox() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your New Life With Us!</h1>
        <div className="search-input">
          <input type="text" placeholder="Enter address, school, city, zip, or neighborhood" />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionPicBox;
