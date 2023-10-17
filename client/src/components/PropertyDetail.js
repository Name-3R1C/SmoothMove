import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PropertyDetail.scss";
import Carousel from "./Carousel";
import PropertyDetailBody from "./PropertyDetailBody";

export default function PropertyDetail({
  currentPropertyID,
  setCurrentProperty,
  onPropertyDeleted,
}) {
  const [property, setProperty] = useState(null);
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);

  useEffect(() => {
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

  const handleDeleteProperty = async () => {
    try {
      await axios.delete(`/api/property/${currentPropertyID}`);
      onPropertyDeleted(currentPropertyID);
      alert("Property deleted successfully");
      setCurrentProperty(null);
    } catch (error) {
      console.error("Error deleting property:", error);
      alert("Error deleting property. Please try again later.");
    }
  };

  const handleEnlargeImage = (image) => {
    setEnlargedImage(image);
    setIsCarouselVisible(true);
  };

  const handleCloseEnlargedImage = () => {
    setEnlargedImage(null);
    setIsCarouselVisible(false);
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
                  src={images[0]}
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
          {isCarouselVisible && (
            <Carousel images={images} currentImageIndex={currentImageIndex} />
          )}
          <PropertyDetailBody
            property={property}
            handleDeleteProperty={handleDeleteProperty}
          />
        </div>
      ) : (
        <p>Loading property details...</p>
      )}
    </div>
  );
}
