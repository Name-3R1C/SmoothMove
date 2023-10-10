import React from "react";
import "./PropertyList.scss";

export default function PropertyCard(props) {
  // console.log(props.setCurrentProperty);
  const formatDate = (dateString) => {
    const options = { month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleCardClick = () => {
    if (props.onCardClick) {
      props.onCardClick(props.property.id);
    }
  };
  return (
    <div key={props.property.id} className="col-md-3 mb-3">
      <div className="card" onClick={handleCardClick}>
        <img
          src={props.property.thumbnail_photo_url}
          className="card-img-top img-fluid"
          alt={props.property.title}
        />
        <div className="card-body card-body-custom">
          <h5 className="card-title card-title-small font-weight-bold">
            {props.property.city}, {props.property.country}{" "}
          </h5>
          <p className="card-text-no-padding card-text-no-margin-bottom font-weight-bold">
            {props.property.number_of_bedrooms} bed,
            {props.property.number_of_bathrooms} Bath
          </p>
          <p className="card-text-no-padding card-text-no-margin-bottom font-weight-bold">
            From {formatDate(props.property.available_from)}
          </p>
          <p className="card-text-no-padding card-text-no-margin-bottom font-weight-bold">
            <strong>${props.property.cost_per_month}/month</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
