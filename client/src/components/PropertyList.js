import React from 'react';


function PropertyList(prop) {
  // Render your properties here
  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3">
        {prop.properties.map((property) => (
          <div key={property.id}>
            <div className='card'>
              <img src={property.thumbnail_photo_url} />
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
}

export default PropertyList;
