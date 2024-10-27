// src/components/ImageGallery.js
import React, { useState } from "react";
import Lightbox from "./Lightbox";
import "../styles.css"; // Ensure this path is correct

const images = [
  { id: 1, src: "/Image/Image1.jpg", alt: "Image 1" },
  { id: 2, src: "/Image/Image3.jpg", alt: "Image 2" },
  { id: 3, src: "/Image/Image4.jpg", alt: "Image 3" },
  { id: 4, src: "/Image/Image5.jpg", alt: "Image 4" },
  { id: 5, src: "/Image/Image7.jpg", alt: "Image 5" },
  { id: 6, src: "/Image/Image8.jpg", alt: "Image 6" },
  { id: 7, src: "/Image/Image2.avif", alt: "Image 7" },
  { id: 8, src: "/Image/Image6.webp", alt: "Image 8" },
  {
    id: 9,
    src: "/Image/181890728_549444779664693_7575002251818033125_n-scaled.jpg",
    alt: "Image 9",
  },
  {
    id: 10,
    src: "/Image/analyzing-impact-external-influences-family-dynamics_1104763-20646.avif",
    alt: "Image 10",
  },
  { id: 11, src: "/Image/baby-and-family-photoshoot-4.jpg", alt: "Image 11" },
  { id: 12, src: "/Image/family-7257182_640.jpg", alt: "Image 12" },
  {
    id: 13,
    src: "/Image/family-portrait-teens-dog-n-lalor-photography-riverside-connecticut.jpg",
    alt: "Image 13",
  },
  { id: 14, src: "/Image/family1-scaled.webp", alt: "Image 14" },
  {
    id: 15,
    src: "/Image/Generation-Portrait-Family-Photoshoot.jpg",
    alt: "Image 15",
  },
  { id: 16, src: "/Image/Gerdes+2018-63.jpg", alt: "Image 16" },
  { id: 17, src: "/Image/gettyimages-1344622271-612x612.jpg", alt: "Image 17" },
  {
    id: 18,
    src: "/Image/happy-black-family-lying-pile-grass-outdoors-happy-black-family-lying-pile-grass-outdoors-99965537.webp",
    alt: "Image 18",
  },
  { id: 19, src: "/Image/Images 9.jpg", alt: "Image 19" },
  { id: 20, src: "/Image/Images 10.jpg", alt: "Image 20" },
  { id: 21, src: "/Image/Images 11.jpg", alt: "Image 21" },
  { id: 22, src: "/Image/Images 12.jpg", alt: "Image 22" },
  { id: 23, src: "/Image/Images 13.jpg", alt: "Image 23" },
  { id: 24, src: "/Image/Images 14.jpg", alt: "Image 24" },
  { id: 25, src: "/Image/Images 15.jpg", alt: "Image 25" },
  { id: 26, src: "/Image/istockphoto-1332489549-612x612.jpg", alt: "Image 26" },
  {
    id: 27,
    src: "/Image/Raleigh-Family-Photographer-Umstead-Park-5.jpg",
    alt: "Image 27",
  },
  {
    id: 28,
    src: "/Image/studio-family-portrait-michael-paula-0096-retouched-portfolio-800px.jpg",
    alt: "Image 28",
  },
  { id: 29, src: "/Image/Images 10.jpg", alt: "Image 29" },
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
    <div>
      <header className="text-white text-center py-2 fixed-top mb-5">
        <h1>Family Image Gallery</h1>
        <p>Explore beautiful family moments captured in time</p>
      </header>
      <div className="mt-5">
        <div className="container my-5 mt-5 mb-5">
          <div className="row">
            {images.map((image) => (
              <div className="col-lg-4 col-md-6 mb-4" key={image.id}>
                <div className="card ">
                  <img
                    src={image.src}
                    className="card-img-top img-fluid"
                    alt={image.alt}
                    onClick={() => openLightbox(image)}
                  />
                </div>
              </div>
            ))}
          </div>
          {isOpen && <Lightbox image={currentImage} onClose={closeLightbox} />}
        </div>
      </div>
      <footer className="bg-dark text-white text-center py-3 mt-5 fixed-bottom">
        <p>
          &copy; {new Date().getFullYear()} Family Gallery. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ImageGallery;
