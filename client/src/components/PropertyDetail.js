// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

export default function PropertyDetail({
  currentPropertyID,
  setCurrentProperty,
}) {
  console.log("PropertyDetail ---- ");
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios
      .get("/api/property-detail/", { params: { id: currentPropertyID } })
      .then((response) => {
        console.log(response.data.properties.rows[0]);
        setProperty(response.data.properties.rows[0]);
        // console.log(property)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPropertyID]);

  return (
    <div className="container">
      <div key={property.id}>
        <div className="card">
          <span onClick={() => setCurrentProperty(null)}> ❌ </span>
          <img src={property.cover_photo_url} alt="type" />
          <div className="card-body">
            <h5 className="card-title">${property.cost_per_month}</h5>
            <p className="card-text">
              {property.number_of_bedrooms} bed {property.number_of_bathrooms}{" "}
              bath {property.area} sqrt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
