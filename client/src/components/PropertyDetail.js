import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PropertyDetail(prop) {
  console.log('PropertyDetai ---- ');
  const [properties, setProperties] = useState([]);

  const queryParams = { id: 1 };

  useEffect(() => {
    axios.get('/api/properties/', { params: queryParams })
      .then((response) => {
        setProperties(response.data.properties.rows);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      {properties.map((property) => (
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
  );
};