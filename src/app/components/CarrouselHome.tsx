"use client";

import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
export function ComponentHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/images-carousel-home/1.jpg",
    "/images/images-carousel-home/2.jpg",
    "/images/images-carousel-home/3.jpg",
    "/images/images-carousel-home/4.jpg",
    "/images/images-carousel-home/5.jpg",
    "/images/images-carousel-home/6.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleNextClick = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevClick = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full">
        <div className="flex h-full items-center justify-center">
        <div className="hidden sm:block absolute top-0 left-0 w-full h-full bg-zinc-400 z-0"></div>
          <div className="relative sm:h-[90vh]">
            <img
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className={`h-full w-full object-contain ${
                currentSlide === 0 ? "sm:h-[90vh]" : ""
              }`}
            />
          </div>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center space-x-4 p-4">
          <button
            onClick={handleNextClick}
            className="bg-gray-200 hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-100 transition duration-150 ease-in-out bg-opacity-50 hover:bg-opacity-100"
          >
            <FontAwesomeIcon icon={faAnglesRight} />
          </button>
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center space-x-4 p-4">
          <button
            onClick={handlePrevClick}
            className="bg-gray-200 hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-100 transition duration-150 ease-in-out bg-opacity-50 hover:bg-opacity-100"
          >
            <FontAwesomeIcon icon={faAnglesLeft} />
          </button>
        </div>
      </div>
    </div>
  );
}
