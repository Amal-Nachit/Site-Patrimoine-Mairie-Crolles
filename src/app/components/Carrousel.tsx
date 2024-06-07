"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface CarouselProps {}

const Carousel: React.FC<CarouselProps> = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const imageDuration = 4 * 1000;
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const url = window.location.href.split("/")[3];
    const fetchImages = async () => {
      const response = await fetch(
        `http://localhost:3000/api/images/${encodeURIComponent(url)}`
      );
      const data = await response.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, imageDuration);
    return () => clearInterval(interval);
  }, []);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full lg:h-screen sm:h-[60vh] md:h-[80vh]  mt-8 border-box">
      <div className="relative w-full h-3/4 overflow-hidden m-0 p-0">
        <div className="absolute left-44 top-1/2 transform -translate-y-1/2 z-10">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-3xl cursor-pointer md:hidden"
            onClick={prevImage}
          />
        </div>

        <div className="absolute right-44 top-1/2 transform -translate-y-1/2 z-10">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-3xl cursor-pointer md:hidden"
            onClick={nextImage}
          />
        </div>

        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
          className="absolute w-full h-full object-contain"
        />
      </div>
    </div>
  );
};
export default Carousel;





