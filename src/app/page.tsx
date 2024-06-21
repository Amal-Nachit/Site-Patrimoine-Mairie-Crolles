"use client";

import React, { useEffect, useRef, useState } from "react";
import "./globals.css";
import Header from "../app/includes/Header";
import Footer from "./includes/Footer";
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
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-100 hover:bg-orange-200 text-black font-bold py-3 px-4 rounded-full bg-opacity-50 z-40"
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


