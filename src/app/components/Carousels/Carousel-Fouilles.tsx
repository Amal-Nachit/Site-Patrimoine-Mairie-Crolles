"use client";

import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

export function ComponentFouilles() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/Fouilles/2.jpg",
    "/images/Fouilles/3.jpg",
    "/images/Fouilles/4.jpg",
    "/images/Fouilles/5.jpg",
    "/images/Fouilles/6.jpg",
    "/images/Fouilles/7.jpg",
    "/images/Fouilles/8.jpg",
    "/images/Fouilles/9.jpg",
    "/images/Fouilles/10.jpg",
    "/images/Fouilles/11.jpg",
    "/images/Fouilles/12.jpg",
    "/images/Fouilles/13.jpg",
    "/images/Fouilles/14.jpg",
    "/images/Fouilles/15.jpg",
    "/images/Fouilles/16.jpg",
    "/images/Fouilles/17.jpg",
    "/images/Fouilles/18.jpg",
    "/images/Fouilles/19.jpg",
    "/images/Fouilles/20.jpg",
    "/images/Fouilles/21.jpg",
    "/images/Fouilles/22.jpg",
    "/images/Fouilles/23.jpg",
    "/images/Fouilles/24.jpg",
    "/images/Fouilles/25.jpg",
    "/images/Fouilles/26.jpg",
    "/images/Fouilles/27.jpg",
    "/images/Fouilles/28.jpg",
    "/images/Fouilles/29.jpg",
    "/images/Fouilles/30.jpg",
    "/images/Fouilles/31.jpg",
    "/images/Fouilles/32.jpg",
    "/images/Fouilles/33.jpg",
    "/images/Fouilles/34.jpg",
    "/images/Fouilles/35.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

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
      {/* Structure pour une image avec ses boutons */}
      <div className="relative w-1/2 sm:w-1/2 xl:w-1/2 2xl:w-1/2">
        {/* Conteneur pour l'image centrée */}
        <div className="flex justify-center items-center h-full">
          {/* Image avec taille fixe */}
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="h-[600px] w-[1000px] object-contain rounded-lg"
          />
        </div>

        {/* Conteneur pour les boutons centrés en bas */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4 p-4">
          {/* Bouton précédent */}
          <button
            onClick={handlePrevClick}
            className="bg-gray-200 hover:bg-green-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-100 transition duration-150 ease-in-out"
          >
            <FontAwesomeIcon icon={faAnglesLeft} />
          </button>

          {/* Bouton suivant */}
          <button
            onClick={handleNextClick}
            className="bg-gray-200 hover:bg-green-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-100 transition duration-150 ease-in-out"
          >
            <FontAwesomeIcon icon={faAnglesRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
