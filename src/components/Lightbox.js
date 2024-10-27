import React from "react";

const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content">
        <img src={image.src} alt={image.alt} className="lightbox-image" />
      </div>
    </div>
  );
};

export default Lightbox;
