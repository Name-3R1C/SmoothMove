import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyDetail from "./PropertyDetail";
import "./PropertyList.scss";
import PropertyCard from "./PropertyCard";

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
  const handleCardClick = (propertyId) => {
    setCurrentProperty(propertyId);
  };

  return (
    <div className="container">
      {currentProperty ? (
        <div className="detail-wrapper">
          <PropertyDetail
            currentPropertyID={currentProperty}
            setCurrentProperty={setCurrentProperty}
            onPropertyDeleted={handlePropertyDeleted}
          />
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-4">
          {properties && properties.length > 0 ? (
            properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onCardClick={handleCardClick}
              />
            ))
          ) : (
            <p>No properties available.</p>
          )}
        </div>
      )}
    </div>
  );
}
