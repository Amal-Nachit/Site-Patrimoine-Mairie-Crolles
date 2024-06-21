"use client";
import React from "react";
import { HamburgerMenu } from "../components/HamburgerMenu";
import "./../globals.css";

const Header = () => {
  return (
    <header className=" w-full bg-zinc-800">
      <div className="container p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="http://www.ville-crolles.fr">
              <img
                src="/images/logo.jpg"
                alt="Logo"
                className="mr-7 lg:block"
                style={{
                  height: "4rem",
                  width: "4rem",
                  borderRadius: "5%",
                }}
              />
            </a>
            <HamburgerMenu />
          </div>
          <div className="hidden md:flex items-center justify-center">
            <h1 className="text-gray-50 font-semibold text-3xl md:text-2xl lg:text-3xl">
              Patrimoine de la ville de Crolles
            </h1>
          </div>

          <div className="flex items-center justify-end">
            <nav className="flex items-center justify-end text-gray-50 font-bold text-lg space-x-4">
              <button className="bg-gray-500 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded-md">
                <a href="/">Accueil</a>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
