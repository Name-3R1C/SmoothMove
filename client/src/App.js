import React, { useState } from "react";
import "./App.scss";
import PropertyList from "./components/PropertyList";
import AddProperty from "./components/AddProperty";
import PropertyDetail from "./components/PropertyDetail";
import Navbar from "./components/Navbar";
import LoginSignup from "./components/LoginSignup";

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
      {page === pages.PropertyList && <PropertyList />}
      {page === pages.PropertyDetail && <PropertyDetail />}
      {page === pages.AddProperty && <AddProperty />}
      {page === pages.LoginSignup && <LoginSignup />}
    </main>
  );
}

export default App;
