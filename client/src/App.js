import React, { useState } from "react";
import "./App.scss";
import AddProperty from "./components/AddProperty";
import Navbar from "./components/Navbar";
import LoginSignup from "./components/LoginSignup";
import PropertySearch from "./components/PropertySearch";

const pages = {
  PropertyList: "PropertyList",
  PropertyDetail: "PropertyDetail",
  AddProperty: "AddProperty",
  LoginSignup: "LoginSignup",
};

function App() {
  const [page, setPage] = useState(pages.PropertyList);

  return (
    <main className="layout">
      <Navbar setPage={setPage} />
      {/* {page === pages.PropertyList && <PropertyList />} */}
      {/* {page === pages.PropertyDetail && <PropertyDetail />} */}
      {page === pages.AddProperty && <AddProperty />}
      {page === pages.LoginSignup && <LoginSignup />}
      {page === pages.PropertyList && <PropertySearch />}
    </main>
  );
}

export default App;
