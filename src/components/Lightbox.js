import React from "react";
import "./styles.css";

const Lightbox = ({ image, onClose }) => {
  return (
    <div className="lightbox" onClick={onClose}>
      <img src={image.src} alt={image.alt} className="lightbox-img" />
    </div>
  );
};

export default Lightbox;
