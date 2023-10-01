import React from 'react';
import axios from 'axios';
import './LoginSignup.scss'

export default function LoginSignup({ setPage }) {
  console.log('LoginSignup ---- ');

  return (
    <div className='signuplogin'>
      <div className="login card-body px-4 py-5 px-md-5 column">
        <h2>Log in</h2>
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" for="form2Example1">Email address</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" for="form2Example2">Password</label>
        </div>

        <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
      </div>

      <div className="signup card-body px-4 py-5 px-md-5 column">
      <h2>Sign Up</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="form-outline">
              <input type="text" id="form3Example1" className="form-control" />
              <label className="form-label" for="form3Example1">First name</label>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="form-outline">
              <input type="text" id="form3Example2" className="form-control" />
              <label className="form-label" for="form3Example2">Last name</label>
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <input type="email" id="form3Example3" className="form-control" />
          <label className="form-label" for="form3Example3">Email address</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form3Example4" className="form-control" />
          <label className="form-label" for="form3Example4">Password</label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4"> Sign up </button>
      </div>
    </div>
  );
};