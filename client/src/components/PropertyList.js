import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PropertyList(prop) {
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
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3">
        {prop.properties.map((property) => (
          <div key={property.id}>
            <div className='card'>
              <img src={property.thumbnail_photo_url} alt='type'/>
              <div className='card-body'>
                <h5 className='card-title'>${property.cost_per_month}</h5>
                <p className='card-text'>{property.number_of_bedrooms} bed {property.number_of_bathrooms} bath {property.area} sqrt</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
