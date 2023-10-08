import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyDetail from "./PropertyDetail";
import "./PropertyList.scss";

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
  // Function to format date in "MMM, yyyy" format
  const formatDate = (dateString) => {
    const options = { month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
        <div className="row row-cols-1 row-cols-md-4">
          {properties && properties.length > 0 ? (
            properties.map((property) => (
              <div key={property.id} className="col-md-3 mb-3">
                <div
                  className="card"
                  onClick={() => setCurrentProperty(property.id)}
                >
                  <img
                    src={property.thumbnail_photo_url}
                    className="card-img-top img-fluid"
                    alt={property.title}
                  />
                  <div className="card-body card-body-custom">
                    <h5 className="card-title card-title-small font-weight-bold">
                      {property.city}, {property.country}{" "}
                    </h5>
                    <p className="card-text-no-padding card-text-no-margin-bottom font-weight-bold">
                      {property.number_of_bedrooms} bed,
                      {property.number_of_bathrooms} Bath
                    </p>
                    <p className="card-text-no-padding card-text-no-margin-bottom font-weight-bold">
                      {formatDate(property.available_from)}
                    </p>
                    <p className="card-text-no-padding card-text-no-margin-bottom font-weight-bold">
                      <strong>${property.cost_per_month}/month</strong>
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
