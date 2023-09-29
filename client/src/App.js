import React, { Fragment } from 'react';
import './App.css';
import PropertyList from './components/PropertyList';
import NewProperty from './components/NewProperty';


function App() {

  return (
    <Fragment>
      {/* <PropertyList 
        properties={properties}
      /> */}
      <NewProperty />
    </Fragment>
  );
}

export default App;
