"use client";

import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";

export function ComponentSepultures() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    {
      src: "/images/Sepultures/3.jpg",
      alt: "Sepultures",
      legend:
        "XIV.048.2007.11.20 rue Jean Jaurés, sépulture et détails squelette",
    },
    {
      src: "/images/Sepultures/4.jpg",
      alt: "Sepultures",
      legend:
        "XIV.054.2007.11.20 rue Jean Jaurés, sépulture et détails squelette",
    },
    {
      src: "/images/Sepultures/5.jpg",
      alt: "Sepultures",
      legend: "XIV.079.2007..11.01 rue Jean Jaurés sépulture, fouille",
    },
    {
      src: "/images/Sepultures/6.jpg",
      alt: "Sepultures",
      legend: "XIV.101.2007..11.01 rue Jean Jaurés sépulture, fouille",
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

  const handlePrevClick = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleNextClick = () => { 
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
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
    <div className="flex justify-center items-center mb-10">
      <div className="relative w-1/2 sm:w-1/2 xl:w-1/2 2xl:w-1/2">
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
          <figcaption className="text-center text-l italic mb-2  ">
            {slides[currentSlide].legend}
          </figcaption>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4 pb-10">
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
