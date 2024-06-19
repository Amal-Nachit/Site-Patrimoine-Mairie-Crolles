"use client";
import React from "react";
import Header from "../../includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentSepultures } from "@/app/components/Carousels/Carousel-Sepultures";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">
              Sépultures mérovingiennes
            </h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a
                    href="https://maps.app.goo.gl/MYA57ascsvQwG3Nm8"
                    className="hover:underline"
                    target="_blank"
                  >
                    Rue Jean Jaurès
                  </a>
                </p>
              </div>
              <div className="flex flex-col mr-20">
                <h3 className="text-lg font-semibold mb-1 mx-8">
                  Accessible au public :
                </h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faXmark} className="mr-2" />
                  Non visible
                  <p className="text-sm italic"></p>
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Moyen-Âge</p>
              </div>
            </div>
          </section>

          <div className="my-10">
            <figure className="flex flex-col items-center justify-center">
              <img
                src="/images/Sepultures/1.jpg"
                alt="La Sepultures"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                XIV.055.2007.11.20 rue Jean Jaurés,sépulture et detail squelette
              </figcaption>
            </figure>
          </div>

          <section className="sm:mx-auto md:mx-auto lg:mx-32 mb-8">
            <p className="sm:mx-auto md:mx-auto lg:mx-32 mb-4">
              Début janvier 2007, quatre sépultures de la période mérovingienne
              ont été découvertes à 2 mètres de profondeur durant des travaux de
              terrassement. Elles dateraient du VIe-VIIe siglo (Haut Moyen-Âge).
              Cette découverte à nouveau enfouie avec précaution laisse supposer
              la présence d’une nécropole dans ce quartier de la commune.
              <br />
              <br />
              Aujourd'hui, les vestiges de ces sépultures ne sont plus visibles.
            </p>
            <figure className="flex flex-col items-center justify-center">
              <img
                src="/images/Sepultures/2.jpg"
                alt=""
                className="mx-auto w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg"
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                Page Regard JM février 07
              </figcaption>
            </figure>
          </section>

          <div>
            <ComponentSepultures />
          </div>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
