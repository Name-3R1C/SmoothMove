import React, { useState } from "react";
import "./App.scss";
import { useCookies } from 'react-cookie';
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
  const [cookies, setCookie] = useCookies(['userID']);

  function handleLogin(id) {
    setCookie("userID", id);
  }

  return (
    <main className="layout">
      <Navbar setPage={setPage} />
      {console.log('cookies: ', cookies.userID)}
      {page === pages.AddProperty && <AddProperty />}
      {page === pages.LoginSignup && <LoginSignup onLogin={handleLogin} />}
      {page === pages.PropertyList && <PropertySearch />}
    </main>
  );
}

export default App;
