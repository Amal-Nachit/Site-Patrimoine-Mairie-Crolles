"use client";

import React, { useEffect, useRef, useState } from "react";
import "./globals.css"; // Assurez-vous que Tailwind est configuré ici
import Header from "../app/includes/Header";
import Footer from "./includes/Footer";
import DataPatrimoine from "./components/data/DataPatrimoine";
import { ComponentHome } from "./components/CarrouselHome";
import CombinedFilter from "./components/filters/Filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const scrollAt = 600;

const App = () => {
  const scrollToFilterRef = useRef(null);
  const [shouldShowScroll, setShouldShowScroll] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > scrollAt) {
      setShouldShowScroll(false);
    } else {
      setShouldShowScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToFilter = () => {
    if (scrollToFilterRef.current) {
      scrollToFilterRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      <Header />

      <div>
        <ComponentHome />
        {shouldShowScroll && (
          <button
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-200 hover:bg-orange-300 text-black font-bold py-3 px-4 rounded-full bg-opacity-50"
            onClick={scrollToFilter}
          >
            <FontAwesomeIcon icon={faChevronDown} size="2x"/>
          </button>
        )}
      </div>

      <div ref={scrollToFilterRef}>
        <CombinedFilter />
      </div>
      <Footer />
    </div>
  );
};

export default App;


