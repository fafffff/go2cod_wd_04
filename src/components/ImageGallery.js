import React, { useState } from "react";
import Lightbox from "./Lightbox";
import "./styles.css";

const images = [
  { id: 1, src: "Image/Image1.jpg", alt: "Image 1" },
  { id: 2, src: "Image/Image3.jpg", alt: "Image 2" },
  { id: 3, src: "Image/Image4.jpg", alt: "Image 3" },
  { id: 4, src: "Image/Image5.jpg", alt: "Image 4" },
  { id: 5, src: "Image/Image7.jpg", alt: "Image 5" },
  { id: 6, src: "Image/Image8.jpg", alt: "Image 6" },
];

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center">Responsive Image Gallery</h1>
      <div className="row">
        {images.map((image) => (
          <div className="col-lg-4 col-md-6 mb-4" key={image.id}>
            <div className="card">
              <img
                src={image.src}
                className="card-img-top"
                alt={image.alt}
                onClick={() => openLightbox(image)}
              />
            </div>
          </div>
        ))}
      </div>
      {isOpen && <Lightbox image={currentImage} onClose={closeLightbox} />}
    </div>
  );
};

export default ImageGallery;
