"use client";

import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";

export function ComponentCroix() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    {
      src: "/images/Croix/2.jpg",
      alt: "Rond point des ayes",
      legend: "Rond point des ayes",
    },
    {
      src: "/images/Croix/3.jpg",
      alt: "Croix Adeodat",
      legend: "Croix Adeodat",
    },
    {
      src: "/images/Croix/4.jpg",
      alt: "Croix chemin de l'Etroit. J.Stéfanini",
      legend: "Croix chemin de l'Etroit. J.Stéfanini",
    },
    {
      src: "/images/Croix/5.jpg",
      alt: "Croix église St-Pierre St-Paul. J.Stéfanini.",
      legend: "Croix église St-Pierre St-Paul. J.Stéfanini.",
    },
    {
      src: "/images/Croix/6.jpg",
      alt: "Croix Montfort.J.Stéfanini.",
      legend: "Croix Montfort.J.Stéfanini.",
    },
    {
      src: "/images/Croix/7.jpg",
      alt: "Croix RN 90 29-07-08 Cl. V. Valenza ",
      legend: "Croix RN 90 29-07-08 Cl. V. Valenza ",
    },
    {
      src: "/images/Croix/8.jpg",
      alt: "Croix rue de l'Eperon 29-07-08 Cl. V. Valenza ",
      legend: "Croix rue de l'Eperon 29-07-08 Cl. V. Valenza ",
    },
  ];

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
      }, 6000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, slides.length]);

  const handleNextClick = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevClick = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="flex justify-center items-center mb-4">
      <div className="relative w-full sm:w-4/5 lg:w-3/4 xl:w-1/2">
        <div
          className="flex flex-col justify-center h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full object-contain rounded-lg mb-2"
          />
          <figcaption className="text-center text-lg italic mb-2">
            {slides[currentSlide].legend}
          </figcaption>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4 pb-12">
          <button
            onClick={handlePrevClick}
            className="bg-gray-200 hover:bg-green-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-100 transition duration-150 ease-in-out"
          >
            <FontAwesomeIcon icon={faAnglesLeft} />
          </button>

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
