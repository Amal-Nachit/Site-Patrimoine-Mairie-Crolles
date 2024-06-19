"use client";

import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

export function ComponentMoulin() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "/images/Moulin-Des-Ayes/2.jpg",
      alt: "Moulin-Des-Ayes",
      legend: "Moulin des Ayes la Serve",
    },
    {
      src: "/images/Moulin-Des-Ayes/3.jpg",
      alt: "Moulin-Des-Ayes",
      legend: "Journée des moulins",
    },
    {
      src: "/images/Moulin-Des-Ayes/4.jpg",
      alt: "Moulin-Des-Ayes",
      legend: "",
    },
    {
      src: "/images/Moulin-Des-Ayes/5.jpg",
      alt: "Moulin-Des-Ayes",
      legend: "",
    },
    {
      src: "/images/Moulin-Des-Ayes/6.jpg",
      alt: "Moulin-Des-Ayes",
      legend: "",
    },
    {
      src: "/images/Moulin-Des-Ayes/7.jpg",
      alt: "Moulin-Des-Ayes",
      legend: "",
    },
    {
      src: "/images/Moulin-Des-Ayes/8.jpg",
      alt: "Moulin-Des-Ayes",
      legend: "Roue du moulin",
    },
    {
      src: "/images/Moulin-Des-Ayes/9.jpg",
      alt: "Moulin-Des-Ayes",
      legend: "XII.777.2012.18.06 Journée des Moulins  Cl. Allée AM",
    },
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
        <div className="flex flex-col justify-center h-full">
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className="h-[400px] w-[800px] object-contain rounded-lg mb-2"
          />
          <figcaption className="text-center text-l italic mb-2  ">
            {slides[currentSlide].legend}
          </figcaption>
          {/* Image avec taille fixe */}
        </div>

        {/* Conteneur pour les boutons centrés en bas */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4 pb-10">
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
