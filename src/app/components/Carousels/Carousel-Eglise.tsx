"use client";

import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

export function ComponentEglise() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "/images/Eglise/2.jpg",
      alt: "Eglise",
      legend: "08-12-09 Amenagements place de l'église",
    },
    {
      src: "/images/Eglise/3.jpg",
      alt: "Eglise",
      legend: "29-05-12 Eglise Christophe Lazarotto",
    },
    {
      src: "/images/Eglise/4.jpg",
      alt: "Eglise",
      legend: "27-08-2004 Eglise.jpg",
    },
    {
      src: "/images/Eglise/5.jpg",
      alt: "Eglise",
      legend: "baptistère,  photo Imago Lucis.jpg",
    },
    {
      src: "/images/Eglise/6.jpg",
      alt: "Eglise",
      legend: "bas-côté,  photo Imago Lucis.jpg",
    },
    {
      src: "/images/Eglise/7.jpg",
      alt: "Eglise",
      legend: "Cloche,  photo Imago Lucis.jpg",
    },
    {
      src: "/images/Eglise/8.jpg",
      alt: "Eglise",
      legend: "IV.G.002 Procession église coll. Genoulaz.jpg",
    },
    {
      src: "/images/Eglise/9.jpg",
      alt: "Eglise",
      legend: "IV.G.003 Procession église coll. Genoulaz.jpg",
    },
    {
      src: "/images/Eglise/10.jpg",
      alt: "Eglise",
      legend: "IV.G.004 Procession église coll. Genoulaz.jpg",
    },
    {
      src: "/images/Eglise/11.jpg",
      alt: "Eglise",
      legend: "IV.G.005 Procession église coll. Genoulaz.jpg",
    },
    {
      src: "/images/Eglise/12.jpg",
      alt: "Eglise",
      legend:
        "IV.G.013-2010.Procession église de Crolles environs 1975 Collection Baron Robert.jpg",
    },
    {
      src: "/images/Eglise/13.jpg",
      alt: "Eglise",
      legend:
        "IV.G.014-2010.Coeur de l'église de Crolles-Communions  vers 1975 Collection Baron Robert.jpg",
    },
    {
      src: "/images/Eglise/14.jpg",
      alt: "Eglise",
      legend: "nef,  photo Imago Lucis.jpg",
    },
    {
      src: "/images/Eglise/15.jpg",
      alt: "Eglise",
      legend: "orgues, photo Imago Lucis.jpg",
    },
    {
      src: "/images/Eglise/16.jpg",
      alt: "Eglise",
      legend: "plafond chapelle S.Cliché L. Mayer.jpg",
    },
    {
      src: "/images/Eglise/17.jpg",
      alt: "Eglise",
      legend: "Procession église coll. Genoulaz.jpg",
    },
    {
      src: "/images/Eglise/18.jpg",
      alt: "Eglise",
      legend: "Saint-Paul,  photo Imago Lucis.jpg",
    },
    {
      src: "/images/Eglise/19.jpg",
      alt: "Eglise",
      legend: "Saint-Pierre,  photo Imago Lucis.jpg",
    },
    {
      src: "/images/Eglise/20.jpg",
      alt: "Eglise",
      legend: "Tryptique Nicolas Grechni,  photo Imago Lucis.jpg",
    },
    {
      src: "/images/Eglise/21.jpg",
      alt: "Eglise",
      legend: "vitrail,  photo Imago Lucis.jpg",
    },
    {
      src: "/images/Eglise/22.jpg",
      alt: "Eglise",
      legend: "vitrail, 2,  photo Imago Lucis.jpg",
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
