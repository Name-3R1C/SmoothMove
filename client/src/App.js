import React, { useState } from "react";
import "./App.scss";
import { useCookies } from "react-cookie";
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
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  function handleLogin(user) {
    setCookie("user", user);
  }

  function handleLogout(user) {
    removeCookie("user");
  }

  return (
    <main className="layout">
      <Navbar setPage={setPage} userName={cookies.user} logout={handleLogout} />
      {page === pages.AddProperty && <AddProperty />}
      {page === pages.LoginSignup && <LoginSignup onLogin={handleLogin} />}
      {page === pages.PropertyList && <PropertySearch />}
    </main>
  );
}

export default App;
