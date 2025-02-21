"use client";

import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function ComponentChateauMontfort() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    "/images/Chateau-Montfort/2.jpg",
    "/images/Chateau-Montfort/3.jpg",
    "/images/Chateau-Montfort/4.jpg",
    "/images/Chateau-Montfort/5.jpg",
    "/images/Chateau-Montfort/6.jpg",
    "/images/Chateau-Montfort/7.jpg",
    "/images/Chateau-Montfort/8.jpg",
    "/images/Chateau-Montfort/9.jpg",
  ];

  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = window.setInterval(() => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
      }, 6000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
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
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="relative w-1/2 sm:w-1/2 xl:w-1/2 2xl:w-1/2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full sm:w-[80%] md:w-[90%] lg:w-[1000px] object-contain rounded-lg"
          />
        </motion.div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4 p-7">
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
