import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import './LoginSignup.scss'

export default function LoginSignup(props) {
  console.log('LoginSignup ---- ');
  // Sign In


  // Sign Up
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [responseMessage, setResponseMessage] = useState("");
  const addUser = () => {
    console.log('user', user);
    axios
      .post("/api/register", { user: user })
      .then ((res) => {
        console.log('res', res.data);
        setResponseMessage(res.data);
      })
      .catch((e) => {
        console.error(e.data);
        setResponseMessage("An error occurred.");
      });
  };

  return (
    <div className='signuplogin'>
      <div className="login card-body px-4 py-5 px-md-5 column">
        <h2>Log in</h2>
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>

        <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
      </div>

      <div className="signup card-body px-4 py-5 px-md-5 column">
        <h2>Sign Up</h2>
        <div className="row">
          <div className="col-md-6 mb-4" onChange={(event) => setUser({...user, firstName: event.target.value})}>
            <div className="form-outline">
              <input type="text" id="form3Example1" className="form-control" />
              <label className="form-label" for="form3Example1">First name</label>
            </div>
          </div>
          <div className="col-md-6 mb-4" onChange={(event) => setUser({...user, lastName: event.target.value})}>
            <div className="form-outline">
              <input type="text" id="form3Example2" className="form-control" />
              <label className="form-label" for="form3Example2">Last name</label>
            </div>
          </div>
        </div>

        {responseMessage && <div className="response-message">{responseMessage}</div>}
        <div className="form-outline mb-4" onChange={(event) => setUser({...user, email: event.target.value})}>
          <input type="email" id="form3Example3" className="form-control" />
          <label className="form-label" htmlFor="form3Example3">Email address</label>
        </div>

        <div className="form-outline mb-4" onChange={(event) => setUser({...user, password: event.target.value})}>
          <input type="password" id="form3Example4" className="form-control" />
          <label className="form-label" htmlFor="form3Example4">Password</label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4" onClick={addUser}> Sign up </button>
      </div>
    </div>
  );
};