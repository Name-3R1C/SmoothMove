import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PropertyDetail.scss";
export default function PropertyDetail({
  currentPropertyID,
  setCurrentProperty,
  onPropertyDeleted,
}) {
  const [property, setProperty] = useState(null);
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState(null); // To store the URL of the enlarged image
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
  // const handlePictureChange = (nextIndex) => {
  //   const newIndex = (nextIndex + images.length) % images.length;
  //   setCurrentImageIndex(newIndex);
  // };
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
  const handlePictureChange = (nextIndex) => {
    const newIndex = (nextIndex + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };
  const handleEnlargeImage = (image) => {
    setEnlargedImage(image);
  };
  const handleCloseEnlargedImage = () => {
    setEnlargedImage(null);
  };
  const isImageEnlarged = enlargedImage !== null;
  return (
    <div
      className={`container custom-container ${
        isImageEnlarged ? "overlay-visible" : ""
      }`}
    >
      {property ? (
        <div className="card custom-card">
          <div className="card-header d-flex justify-content-between align-items-center custom-card-header">
            <h5 className="card-title">{property.title}</h5>
            <span
              className="close-icon"
              onClick={() => setCurrentProperty(null)}
            >
              ❌
            </span>
          </div>
          <div className="property-image-gallery row">
            <div
              className={`col-md-${
                isImageEnlarged ? "12" : "6"
              } custom-padding`}
            >
              <div className="card">
                <img
                  src={images[0]} // Assuming the first image is at index 0
                  alt={`Property 1`}
                  className={`full-width ${isImageEnlarged ? "enlarged" : ""}`}
                  onClick={() => handleEnlargeImage(images[0])}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                {images.slice(1, 5).map((image, index) => (
                  <div
                    className={`col-6${index === 3 ? "" : " mb-3"}`}
                    key={index}
                  >
                    <div className="card">
                      <img
                        src={image}
                        alt={`Property ${index + 2}`}
                        className={`img-fixed-size ${
                          isImageEnlarged ? "enlarged" : ""
                        }`}
                        onClick={() => handleEnlargeImage(images[index + 1])}
                      />
                      {index === 3 && images.length > 5 && (
                        <div
                          className="overlay"
                          onClick={() => handleEnlargeImage(images[index + 1])}
                        >
                          <p>+{images.length - 4}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {isImageEnlarged && (
              <div
                className="enlarged-image-container"
                onClick={handleCloseEnlargedImage}
              >
                <div className="enlarged-image">
                  <img
                    src={enlargedImage}
                    alt="Enlarged Property Image"
                    className="img-fluid fit-in-gallery"
                  />
                </div>
              </div>
            )}
          </div>
          {/* <div
          col-md-${index === 0 ? "6" : "3"}
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
                    //style={{ width: imageWidth, height: imageHeight }}
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
          </div> */}
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
