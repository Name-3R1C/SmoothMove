import React, { Fragment } from 'react';
import './App.css';
import PropertyList from './components/PropertyList';
import AddProperty from './components/AddProperty';
import PropertyDetail from './components/PropertyDetail';

function App() {

  return (
    <Fragment>
      <PropertyList />
      {/* <AddProperty /> */}
      {/* <PropertyDetail /> */}
    </Fragment>
  );
}

export default App;
