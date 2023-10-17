// Carousel.js
import React from "react";

function Carousel({ images, currentImageIndex }) {
  return (
    <div id="propertyCarousel" className="carousel slide" data-ride="carousel">
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
            />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#propertyCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#propertyCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" ariahidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
