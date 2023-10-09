import React, { useState } from "react";
import "./App.scss";
import { useCookies } from "react-cookie";
import AddProperty from "./components/AddProperty";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import PropertySearch from "./components/PropertySearch";

import Footer from "./components/Footer";

const pages = {
  PropertyList: "PropertyList",
  PropertyDetail: "PropertyDetail",
  AddProperty: "AddProperty",
  Login: "Login",
};

function App() {
  const [page, setPage] = useState(pages.PropertyList);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [welcomeVisible, setWelcomeVisible] = useState(false);

  function handleLogin(user) {
    setCookie("user", user);

    setWelcomeVisible(true);
    setTimeout(() => {
      setWelcomeVisible(false);
    }, 5000);
  }

  function handleLogout(user) {
    removeCookie("user");
  }

  return (
    <div className="app">
      <main className="layout">
        <Navbar
          setPage={setPage}
          userName={cookies.user}
          logout={handleLogout}
        />
        {welcomeVisible && (
          <div className="welcome-message">
            Welcome, {cookies.user?.firstName}
          </div>
        )}
        {page === pages.AddProperty && <AddProperty />}
        {page === pages.Login && <Login onLogin={handleLogin} />}
        {page === pages.PropertyList && <PropertySearch />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
