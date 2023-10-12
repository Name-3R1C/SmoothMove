import React from "react";

export default function ImageCarousel({
  images,
  currentImageIndex,
  onNext,
  onPrev,
}) {
  return (
    <div className="image-carousel">
      <img
        src={images[currentImageIndex]}
        alt={`Property ${currentImageIndex + 1}`}
        className="img-fluid"
      />
      <button onClick={onPrev} className="carousel-button prev-button">
        &lt; Prev
      </button>
      <button onClick={onNext} className="carousel-button next-button">
        Next &gt;
      </button>
    </div>
  );
}
