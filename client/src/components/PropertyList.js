import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyDetail from "./PropertyDetail";



export default function PropertyList(prop) {
  const [properties, setProperties] = useState([]);
  const [currentProperty, setCurrentProperty] = useState();

  const getProperties = () => {
    axios
      .get("/api/properties")
      .then((response) => {
        setProperties(response.data.properties);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProperties();
  }, []);
  const handlePropertyDeleted = (deletedPropertyId) => {
    // Filter out the deleted property from the properties array
    const updatedProperties = properties.filter(
      (property) => property.id !== deletedPropertyId
    );
    setProperties(updatedProperties);
  };
  return (
    <div className="container">
      {currentProperty ? (
        <PropertyDetail
          currentPropertyID={currentProperty}
          setCurrentProperty={setCurrentProperty}
          onPropertyDeleted={handlePropertyDeleted}
        />
      ) : (
        <div className="row row-cols-1 row-cols-md-3">
          {properties && properties.length > 0 ? (
            properties.map((property) => (
              <div key={property.id} className="col-md-4 mb-3">
                <div
                  className="card"
                  onClick={() => setCurrentProperty(property.id)}
                >
                  <img
                    src={property.thumbnail_photo_url}
                    className="card-img-top img-fluid"
                    alt={property.title}
                    style={{ maxHeight: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">
                      <strong>Cost per Month:</strong> $
                      {property.cost_per_month}
                    </p>
                    <p className="card-text">
                      <strong>Bedrooms:</strong> {property.number_of_bedrooms}
                    </p>
                    <p className="card-text">
                      <strong>Bathrooms:</strong> {property.number_of_bathrooms}
                    </p>
                    <p className="card-text">
                      <strong>Street:</strong> {property.street}
                    </p>
                    <p className="card-text">
                      <strong>City:</strong> {property.city}
                    </p>
                    <p className="card-text">
                      <strong>Province:</strong> {property.province}
                    </p>
                    <p className="card-text">
                      <strong>Postal Code:</strong> {property.post_code}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No properties available.</p>
          )}
        </div>
      )}
    </div>
  );
}
