import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import PropertyList from './components/PropertyList';


function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('/api/properties')
      .then((response) => {
        setProperties(response.data.properties.rows);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Fragment>
      <PropertyList 
        properties={properties}
      />
    </Fragment>
  );
}

export default App;
