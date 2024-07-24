"use client";

import React, { useEffect, useRef, useState } from "react";
import "./globals.css";
import Header from "../app/includes/Header";
import Footer from "./includes/Footer";
import { ComponentHome } from "./components/CarrouselHome";
import CombinedFilter from "./components/filters/Filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import Actualites from "./actualites/page";

const scrollAt = 600;

const Home = () => {
  const scrollToFilterRef = useRef<HTMLDivElement | null>(null);
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white">
      <Header />

      <div>
        <ComponentHome />
        {shouldShowScroll && (
          <button
            className="fixed bottom-4 right-4 transform -translate-x-1/2 bg-blue-100 hover:bg-blue-200 text-black font-bold py-2 px-4 rounded-full bg-opacity-50 z-40"
            onClick={scrollToFilter}
          >
            <FontAwesomeIcon icon={faAnglesDown} />
          </button>
        )}
        {!shouldShowScroll && (
          <button
            className="fixed bottom-4 right-4 transform -translate-x-1/2 bg-blue-100 hover:bg-blue-200 text-black font-bold py-2 px-4 rounded-full bg-opacity-50 z-40"
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faAnglesUp} />
          </button>
        )}
      </div>
      <main className="">
        <div className="">
          <Actualites />
        </div>

        <div className="bg-white border-b border-zinc-300">
          <hr />
        </div>
        <div ref={scrollToFilterRef}>
          <CombinedFilter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
