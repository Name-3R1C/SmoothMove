import React, { Fragment } from "react";
import "./App.css";
import PropertyList from "./components/PropertyList";
import AddProperty from "./components/AddProperty";
import PropertyDetail from "./components/PropertyDetail";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PropertySearch from "./components/PropertySearch";

function App() {
  return (
    <Fragment>
      <Navbar />
      <PropertySearch />
      {/* <PropertyList /> */}
    </Fragment>
  );
}

export default App;
