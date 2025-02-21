"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentBassins } from "@/app/components/Carousels/Carousel-Bassins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Bassins et fontaines</h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a
                    href="https://maps.app.goo.gl/fy41MKPbiD7adh657"
                    className="hover:underline"
                    target="_blank"
                  >
                    Rue du Fragnes & Rue du Brocey
                  </a>
                </p>
              </div>
              <div className="flex flex-col mr-20">
                <h3 className="text-lg font-semibold mb-1 mx-8">
                  Accessible au public :
                </h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faXmark} className="mr-2" />
                  Non <br />
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Comtemporaine</p>
              </div>
            </div>
          </section>

          <div className="my-10">
            <figure className="flex flex-col items-center justify-center">
              <img
                src="/images/Bassins-Fontaines/1.jpg"
                alt="Bassins et fontaines"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                Bassin dit Drevet
              </figcaption>
            </figure>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Crolles au début du XXe siècle compte 8 cafés ou restaurants. Le
              plus ancien est celui de la rue de la gifle et il a comme enseigne
              « Au rendez-vous des Chasseurs ».
              <br /> <br /> Rue du Berger, une des façades (aujourd’hui
              appartenant à un habitat privé) témoigne de l’existence d’un
              ancien café : « le café de la Nine ». Le décor peint représente
              Bacchus et rappelle donc l’ancienne activité commerciale de ce
              lieu.
              <br /> <br /> Témoignage rare en milieu urbain, il a été l’objet
              d’une restauration récente financée par la commune.
            </p>
          </section>
          <div>
            <ComponentBassins />
          </div>
          <div>
            <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
              <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
                En savoir +
              </h2>
              <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
                Article JM rénovation
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
