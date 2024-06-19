"use client";

import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

export function ComponentFour() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/Four-pain/2.jpg",
    "/images/Four-pain/3.jpg",
    "/images/Four-pain/4.jpg",
    "/images/Four-pain/5.jpg",
    "/images/Four-pain/6.jpg",
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
    <div className="flex justify-center items-center pt-0 pb-8">
      {/* Structure pour une image avec ses boutons */}
      <div className="relative w-1/2 sm:w-1/2 xl:w-1/2 2xl:w-1/2">
        {/* Conteneur pour l'image centrée */}
        <div className="flex justify-center items-center h-full">
          {/* Image avec taille fixe */}
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="h-[500px] w-[900px] object-contain rounded-lg"
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
