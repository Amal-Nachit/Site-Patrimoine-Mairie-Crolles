"use client";

import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

export function ComponentViticulture() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "/images/Viticulture/2.jpg",
      alt: "Viticulture",
      legend: "Fonds privé F. Jacob. Crolles,",
    },
    {
      src: "/images/Viticulture/3.jpg",
      alt: "Viticulture",
      legend: "Fonds privé JF Comte, 1968, Crolles, côteaux, début XXe",
    },
    {
      src: "/images/Viticulture/4.jpg",
      alt: "Viticulture",
      legend: "I.B.004bis. taille de la vigne.",
    },
    {
      src: "/images/Viticulture/5.jpg",
      alt: "Viticulture",
      legend: "I.B.005. famille Amblard jour de vendanges, coll. G. Grambin.",
    },
    {
      src: "/images/Viticulture/6.jpg",
      alt: "Viticulture",
      legend: "I.B.009bis. famille Perrotin-Grambin aux vendanges, scan",
    },
    {
      src: "/images/Viticulture/7.jpg",
      alt: "Viticulture",
      legend:
        "I.B.033.2008 Objet se glissant dans la ceinture du vigneron et servant à ranger sa serpette Coll. S.Cuttaz",
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
