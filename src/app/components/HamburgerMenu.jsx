"use client";
import React, { useState, useRef, useEffect } from "react";
import Hamburger from "hamburger-react";
import DataPatrimoine from "./data/DataPatrimoine";
import { motion, useCycle } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faMap,
  faMicrophone,
  faLandmark,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export const HamburgerMenu = () => {
  const [patrimoineList, setPatrimoineList] = useState(DataPatrimoine);
  const [open, toggleOpen] = useCycle(false, true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const menuRef = useRef();

  const handleSubMenuOpen = () => {
    setSubMenuOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (!open) {
      setSubMenuOpen(false);
    }
  }, [open]);

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    closed: {
      x: "-150%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  };

  return (
    <div className="relative" ref={menuRef}>
      <div className="sticky z-20 ml-3">
        <div className="flex items-center cursor-pointer" onClick={toggleOpen}>
          <Hamburger toggled={open} color="#fff" />
          <h2 className="ml-1 font-arial text-white text-2xl">MENU</h2>
        </div>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50"
          onClick={() => toggleOpen()}
        ></div>
      )}
      <motion.ul
        initial={open ? "open" : "closed"}
        animate={open ? "open" : "closed"}
        variants={menuVariants}
        style={{
          position: "absolute",
          left: "-78%",
          top: "100%",
          marginTop: "0",
          width: `${subMenuOpen ? "50rem" : "26rem"}`,
          padding: "0.5rem",
          borderRadius: "0.5rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          backgroundColor: "#f5f5f5",
          border: "1px solid #ccc",
          fontWeight: "600",
        }}
      >
        <li
          style={{
            listStyle: "none",
            padding: "1rem",
            borderBottom: "1px solid #ddd",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
          className="cursor-pointer hover:bg-zinc-800 hover:text-white transition-colors duration-300"
          onClick={handleSubMenuOpen}
        >
          <FontAwesomeIcon icon={faLandmark} />
          PATRIMOINES DE CROLLES{" "}
          <FontAwesomeIcon
            icon={subMenuOpen ? faChevronDown : faChevronUp}
            className={`transform transition-transform ${open ? "" : ""}`}
          />
        </li>
        {subMenuOpen && (
          <motion.ul
            initial="closed"
            animate={subMenuOpen ? "open" : "closed"}
            variants={menuVariants}
            className="pl-4 grid grid-cols-3"
          >
            {patrimoineList.map((item) => (
              <a
                href={`/Patrimoine/${item.url}`}
                style={{ color: "#333", textDecoration: "none" }}
              >
                <li
                  style={{
                    listStyle: "none",
                    padding: "1rem",
                    borderBottom: "1px solid #ddd",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    fontSize: "0.9rem",
                  }}
                  className="cursor-pointer hover:bg-zinc-800 hover:text-white transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                  {item.name}
                </li>
              </a>
            ))}
          </motion.ul>
        )}
        <a href="#" style={{ color: "#333", textDecoration: "none" }}>
          <li
            style={{
              listStyle: "none",
              padding: "1rem",
              borderBottom: "1px solid #ddd",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
            className="cursor-pointer hover:bg-zinc-800 hover:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faMap} />
            BALADES AUTOUR DES PATRIMOINES
          </li>
        </a>
        <a href="#" style={{ color: "#333", textDecoration: "none" }}>
          <li
            style={{
              listStyle: "none",
              padding: "1rem",
              borderBottom: "1px solid #ddd",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
            className="cursor-pointer hover:bg-zinc-800 hover:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faMicrophone} />
            CES CROLLOIS QUI FONT L'HISTOIRE
          </li>
        </a>
      </motion.ul>
    </div>
  );
};
