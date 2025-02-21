"use client";

import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function ComponentCouvent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    "/images/Ancien-Couvent/2.jpg",
    "/images/Ancien-Couvent/3.jpg",
    "/images/Ancien-Couvent/4.jpg",
    "/images/Ancien-Couvent/5.jpg",
    "/images/Ancien-Couvent/6.jpg",
    "/images/Ancien-Couvent/7.jpg",
    "/images/Ancien-Couvent/8.jpg",
    "/images/Ancien-Couvent/9.jpg",
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
    <div className="flex justify-center items-center mb-8">
      <div className="relative w-1/2 sm:w-1/2 xl:w-1/2 2xl:w-1/2">
        <div
          className="flex justify-center items-center h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="h-[600px] w-[1000px] object-contain rounded-lg"
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
