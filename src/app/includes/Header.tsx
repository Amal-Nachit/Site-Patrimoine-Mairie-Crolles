"use client";
import React from "react";
import { HamburgerMenu } from "../components/HamburgerMenu";
import "./../globals.css";

const Header = () => {
  return (
    <header className="w-full bg-zinc-800">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="https://www.crolles.fr/">
              <img
                src="/images/logo.jpg"
                alt="Logo ville de"
                className="mr-3 lg:block"
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
            <h1 className="text-gray-50 font-semibold text-3xl md:text-2xl lg:text-4xl">
              Patrimoine de la ville de Crolles
            </h1>
          </div>

          <div className="flex items-center justify-end sm:space-x-6">
            <nav className="flex items-center justify-end  font-bold text-lg space-x-4">
              <a
                href="/"
                className="text-black bg-blue-100 hover:bg-blue-200 font-semibold py-2 px-4 rounded-md"
              >
                Accueil
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
