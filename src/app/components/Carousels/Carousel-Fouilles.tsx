"use client";

import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";

export function ComponentFouilles() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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
    <div className="flex justify-center items-center">
      <div className="relative w-1/2 sm:w-1/2 xl:w-1/2 2xl:w-1/2">
      <div
          className="flex flex-col justify-center h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={slides[currentSlide]}
            alt={slides[currentSlide]}
            className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full object-contain rounded-lg mb-2"
          />
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4 p-4">
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
