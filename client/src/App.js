import React, { useState } from "react";
import "./App.scss";
import { useCookies } from "react-cookie";
import AddProperty from "./components/AddProperty";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import PropertySearch from "./components/PropertySearch";
import Signup from "./components/signup";
import HeroSectionPicBox from "./components/HeroSectionPicBox";
import Footer from "./components/Footer";
// import GoogleMapContainer from "./components/GoogleMapContainer";

const pages = {
  PropertyList: "PropertyList",
  PropertyDetail: "PropertyDetail",
  AddProperty: "AddProperty",
  Login: "Login",
  Signup: "Signup",
};

function App() {
  const [page, setPage] = useState(pages.PropertyList);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!cookies.user);
  function handleLogin(user) {
    setCookie("user", user);
    setPage(pages.PropertyList);
    setWelcomeVisible(true);
    setTimeout(() => {
      setWelcomeVisible(false);
    }, 5000);
    setIsLoggedIn(true);
  }

  function handleLogout(user) {
    removeCookie("user");
    setPage(pages.PropertyList);
    setIsLoggedIn(false);
  }
  function handleAddPropertyClick() {
    setPage(pages.AddProperty);
  }
  function handleSignupClick() {
    setPage(pages.Signup); // Set the page to Signup when the "Sign Up" button is clicked
  }
  function handleSignup(user) {
    setCookie("user", user);
    setIsLoggedIn(true); // Automatically log in the user after signup
    setPage(pages.PropertyList); // Redirect to the PropertyList page
  }
  return (
    <div className="app">
        <Navbar
          setPage={setPage}
          userName={cookies.user}
          logout={handleLogout}
          onAddPropertyClick={handleAddPropertyClick}
          onSignupClick={handleSignupClick}
          isLoggedIn={isLoggedIn}
          welcomeVisible={welcomeVisible}
        />
          <main className="layout">
        <HeroSectionPicBox />
        {page === pages.AddProperty && <AddProperty />}
        {page === pages.Login && <Login onLogin={handleLogin} />}
        {page === pages.Signup && <Signup onSignup={handleSignup} />}
        {page === pages.PropertyList && (
          <PropertySearch
            welcomeVisible={welcomeVisible}
            userName={cookies.user?.firstName}
          />
        )}
      </main>
      {/* <GoogleMapContainer /> */}
      <Footer />
    </div>
  );
}

export default App;
