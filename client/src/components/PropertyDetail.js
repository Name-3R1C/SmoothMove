import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PropertyDetail({
  currentPropertyID,
  setCurrentProperty,
  onPropertyDeleted,
}) {
  const [property, setProperty] = useState(null);
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Define the URL to fetch property details by ID
    const url = `/api/property/${currentPropertyID}`;

    axios
      .get(url)
      .then((response) => {
        setProperty(response.data.property);
        setImages(response.data.property.images);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPropertyID]);

  const handlePictureChange = (nextIndex) => {
    const newIndex = (nextIndex + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const imageWidth = "400px"; // Adjust the desired width
  const imageHeight = "500px"; // Adjust the desired height

  // Configure the interval (in milliseconds) for the carousel transition
  const carouselInterval = 3000; // Adjust the desired interval (e.g., 3000 ms = 3 seconds)
  const handleDeleteProperty = async () => {
    try {
      // Send a DELETE request to delete the property
      await axios.delete(`/api/property/${currentPropertyID}`);
      onPropertyDeleted(currentPropertyID);
      alert("Property deleted successfully");
      setCurrentProperty(null);
    } catch (error) {
      console.error("Error deleting property:2", error);

      alert("Error deleting property. Please try again later.");
    }
  };
  return (
    <div className="container mt-5">
      {property ? (
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title">${property.cost_per_month}</h5>
            <span
              className="close-icon"
              onClick={() => setCurrentProperty(null)}
            >
              ❌
            </span>
          </div>
          <div
            id="propertyCarousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval={carouselInterval}
          >
            <ol className="carousel-indicators">
              {images.map((_, index) => (
                <li
                  key={index}
                  data-target="#propertyCarousel"
                  data-slide-to={index}
                  className={index === currentImageIndex ? "active" : ""}
                ></li>
              ))}
            </ol>
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`Property ${index + 1}`}
                    style={{ width: imageWidth, height: imageHeight }}
                  />
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#propertyCarousel"
              role="button"
              data-slide="prev"
              onClick={() => handlePictureChange(currentImageIndex - 1)}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#propertyCarousel"
              role="button"
              data-slide="next"
              onClick={() => handlePictureChange(currentImageIndex + 1)}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">{property.title}</h5>
            <p className="card-text">{property.description}</p>
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
        </div>
      ) : (
        <p>Loading property details...</p>
      )}
    </div>
  );
}
