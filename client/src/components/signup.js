// Signup.js

import React, { useState } from "react";
import axios from "axios";

export default function Signup({ onSignup }) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const signup = () => {
    axios
      .post("/api/register", { user })
      .then((res) => {
        if (isNaN(res.data.userID)) {
          setResponseMessage(res.data);
        } else {
          setResponseMessage("");
          onSignup(res.data);
        }
      })
      .catch((e) => {
        console.error(e.data);
        setResponseMessage("An error occurred.");
      });
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      {responseMessage && (
        <div className="alert alert-danger mt-3">{responseMessage}</div>
      )}
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Email address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={signup}
      >
        Sign up
      </button>
    </div>
  );
}
