import React, { useState, useEffect } from 'react';
import axios from "axios";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('/api/properties')
      .then((response) => {
        console.log("client - src - properties", response.data.properties.rows);
        setProperties(response.data.properties.rows);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Render your properties here
  return (
    <div>
      {properties.map((property) => (
        <div key={property.id}>
          <section>
            <img src={property.thumbnail_photo_url} />
          </section>
          <ul>
            <li>{property.title}</li>
            <li>{property.description}</li>
            <li>{property.cost_per_month}</li>
            <li>{property.number_of_bedrooms}</li>
            <li>{property.number_of_bathrooms}</li>
            <li>{property.area}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
