import React from "react";
import "./PropertyDetailBody.scss";

const PropertyDetailBody = ({ property, handleDeleteProperty }) => {
  //console.log("body", property);
  return (
    <>
      <div className="card-body">
        <h5 className="card-title text-start">{property.title}</h5>
        <p className="card-text text-start">
          {property.number_of_bedrooms} bed . {property.number_of_bathrooms}{" "}
          Bath
        </p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{property.description}</li>
        </ul>
      </div>

      <div className="card-footer">
        <p className="card-text">
          <strong>Address:</strong> {property.street}, {property.city},{" "}
          {property.province}, {property.post_code}
        </p>
        <button className="btn btn-danger" onClick={handleDeleteProperty}>
          Delete Property
        </button>
      </div>
    </>
  );
};

export default PropertyDetailBody;
