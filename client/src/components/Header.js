import React from 'react';
import axios from 'axios';

export default function Header({ setPage }) {

  return (
    <header>
      <h2 onClick={() => setPage('PropertyList')}><span style={{color: 'red'}}>SMOOTH</span>MOVE.INC</h2>
      <h4 onClick={() => setPage('AddProperty')}> Add Property </h4>
      <h4 onClick={() => setPage('LoginSignup')}>Login/Signup</h4>
    </header>
  );
};