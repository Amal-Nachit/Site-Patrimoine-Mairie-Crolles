"use client";

import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

export function ComponentVitraux() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "/images/Vitraux/1.jpg",
      alt: "Heureux ceux qui pleurent car Dieu les consolera",
      legend: "Heureux ceux qui pleurent car Dieu les consolera",
    },
    {
      src: "/images/Vitraux/2.jpg",
      alt: "La consolation",
      legend: "La consolation",
    },
    {
      src: "/images/Vitraux/3.jpg",
      alt: "Famille en prière",
      legend: "Famille en prière",
    },
    {
      src: "/images/Vitraux/4.jpg",
      alt: "Heureux ceux qui sont doux car ils recevront la terre que Dieu a promise",
      legend:
        "Heureux ceux qui sont doux car ils recevront la terre que Dieu a promise",
    },
    {
      src: "/images/Vitraux/5.jpg",
      alt: "Heureux ceux qui ont faim et soif de vivre comme Dieu le demande car Dieu exaucera leur désir",
      legend:
        "Heureux ceux qui ont faim et soif de vivre comme Dieu le demande car Dieu exaucera leur désir",
    },
    {
      src: "/images/Vitraux/6.jpg",
      alt: "La prostitution",
      legend: "La prostitution",
    },
    {
      src: "/images/Vitraux/7.jpg",
      alt: "Heureux ceux qui ont de la compassion pour autrui, car Dieu aura de la compassion pour eux",
      legend:
        "Heureux ceux qui ont de la compassion pour autrui, car Dieu aura de la compassion pour eux",
    },
    {
      src: "/images/Vitraux/8.jpg",
      alt: "La miséricorde",
      legend: "La miséricorde",
    },
    {
      src: "/images/Vitraux/9.jpg",
      alt: "Heureux ceux qui ont le coeur pur, car ils verront dieu",
      legend: "Heureux ceux qui ont le coeur pur, car ils verront dieu",
    },
    {
      src: "/images/Vitraux/10.jpg",
      alt: "Heureux ceux qui créent la paix autour d'eux, car Dieu les appellera ses fils",
      legend:
        "Heureux ceux qui créent la paix autour d'eux, car Dieu les appellera ses fils",
    },
    {
      src: "/images/Vitraux/11.jpg",
      alt: "Heureux ceux qu'on persécute parce qu'ils agissent comme dieu le demande, car le royaume des cieux est à eux",
      legend:
        "Heureux ceux qu'on persécute parce qu'ils agissent comme dieu le demande, car le royaume des cieux est à eux",
    },
    {
      src: "/images/Vitraux/12.jpg",
      alt: "    Heureux ceux qui ont le cœur pur, car ils verront Dieu  ",
      legend: "    Heureux ceux qui ont le cœur pur, car ils verront Dieu  ",
    },
    {
      src: "/images/Vitraux/13.jpg",
      alt: "    Heureux ceux qui créent la paix autour d’eux, car Dieu les appellera ses fils  ",
      legend: "    Heureux ceux qui créent la paix autour d’eux, car Dieu les appellera ses fils  ",
    },
    {
      src: "/images/Vitraux/14.jpg",
      alt: "    Heureux ceux qu’on persécute parce qu’ils agissent comme Dieu le demande, car le royaume des cieux est à eux ! ",
      legend: "    Heureux ceux qu’on persécute parce qu’ils agissent comme Dieu le demande, car le royaume des cieux est à eux ! ",
    },
    {
      src: "/images/Vitraux/15.jpg",
      alt: "heureux ceux qui se savent pauvres en eux-mêms, car le royaume des cieux est à eux",
      legend:
        "heureux ceux qui se savent pauvres en eux-mêms, car le royaume des cieux est à eux",
    },
    {
      src: "/images/Vitraux/16.jpg",
      alt: "Réponse , matérialisme",
      legend: "Réponse , matérialisme",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

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
        <div className="flex flex-col justify-center h-full rounded-xl">
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className="h-[600px] w-[1600px] object-contain rounded-xl mb-2"
          />
          <figcaption className="absolute bottom-8 left-0 right-0 text-center bg-transparent">
            <div className="bg-zinc-800/70 text-white p-2">
              {slides[currentSlide].legend}
            </div>
          </figcaption>
          {/* Image avec taille fixe */}
        </div>
        {/* Conteneur pour les boutons centrés en bas */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4 pb-10">
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

