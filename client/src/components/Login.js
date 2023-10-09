import React, { useState } from "react";
import axios from "axios";
import "./Login.scss"; // Import your custom SCSS for additional styling

export default function Login({ onLogin }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const signin = () => {
    axios
      .post("/api/signin", { user: user })
      .then((res) => {
        if (isNaN(res.data.userID)) {
          setResponseMessage(res.data);
        } else {
          setResponseMessage("");
          onLogin(res.data);
          // Automatically hide the welcome message after 5 seconds

          window.location.href = "/property";
        }
      })
      .catch((e) => {
        console.error(e.data);
        setResponseMessage("An error occurred.");
      });
  };

  return (
    <div className="container-login h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card-login">
            <div className="card-body">
              <h2 className="card-title-login">Log In</h2>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  onChange={(event) =>
                    setUser({ ...user, email: event.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(event) =>
                    setUser({ ...user, password: event.target.value })
                  }
                />
              </div>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={signin}
              >
                Sign in
              </button>
              {responseMessage && (
                <div className="alert alert-danger mt-3">{responseMessage}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
