"use client";

import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

export function ComponentAbbaye() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "/images/Abbaye-des-Ayes/2.jpg",
      alt: "Blason Abbaye",
      legend: "Blason Abbaye",
    },
    {
      src: "/images/Abbaye-des-Ayes/3.jpg",
      alt: "Escalier façade nord-ouest",
      legend: "Escalier façade nord-ouest",
    },
    {
      src: "/images/Abbaye-des-Ayes/4.jpg",
      alt: "Façade nord-est",
      legend: "Façade nord-est",
    },
    {
      src: "/images/Abbaye-des-Ayes/5.jpg",
      alt: "Abbaye, façade sud. Cliché V. Valenza",
      legend: "Abbaye, façade sud. Cliché V. Valenza",
    },
    {
      src: "/images/Abbaye-des-Ayes/6.jpg",
      alt: "Chapiteau Abbaye des Ayes, coll. Musée dauphinois . V.Valenza",
      legend: "Chapiteau Abbaye des Ayes, coll. Musée dauphinois . V.Valenza",
    },
    {
      src: "/images/Abbaye-des-Ayes/7.jpg",
      alt: "Chapiteau Abbaye des Ayes, coll. Musée dauphinois . V.Valenza",
      legend: "Chapiteau Abbaye des Ayes, coll. Musée dauphinois . V.Valenza",
    },
    {
      src: "/images/Abbaye-des-Ayes/8.jpg",
      alt: "Intérieur, cliché H. Müller, coll. Musée dauphinois",
      legend: "Intérieur, cliché H. Müller, coll. Musée dauphinois",
    },
    {
      src: "/images/Abbaye-des-Ayes/9.png",
      alt: "Reconstitution du plan de l'Abbaye des Ayes, dessin G. Fort",
      legend: "Reconstitution du plan de l'Abbaye des Ayes, dessin G. Fort",
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
          <figcaption className="text-center text-l italic mb-2  ">{slides[currentSlide].legend}</figcaption>
          {/* Image avec taille fixe */}
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className="h-[400px] w-[800px] object-contain rounded-lg mb-2"
          />
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


