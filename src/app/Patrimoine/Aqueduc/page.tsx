"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentAqueduc } from "@/app/components/Carousels/Carousel-Aqueduc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Aqueduc</h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a
                    href="https://maps.app.goo.gl/rfAmHZ1T6c6JwWbR8"
                    className="hover:underline"
                    target="_blank"
                  >
                    Rue de la Cascade
                  </a>
                </p>
              </div>
              <div className="flex flex-col mr-20">
                <h3 className="text-lg font-semibold mb-1 mx-8">
                  Accessible au public :
                </h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faXmark} className="mr-2" />
                  Non
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Moderne</p>
              </div>
            </div>
          </section>

          <div className="my-10">
            <figure className="flex flex-col items-center justify-center">
              <img
                src="/images/Aqueduc/1.jpg"
                alt="Aqueduc"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
               Aqueduc, cimenterie.Cliché L.M.
              </figcaption>
            </figure>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Cet aqueduc situé près de l’ancienne cimenterie n'est pas
              directement lié aux activités de celle-ci. Il semble plutôt qu'il
              ait été construit pour acheminer l'eau captée aux sources de
              Plâtre-Magny jusqu'au bourg de Crolles.
              <br /> <br />
              Après avoir traversé le ruisseau vers sa rive droite, la
              canalisation suivait cette rive du ruisseau et le retraversait en
              amont de la route nationale sur un autre aqueduc. Ce dernier est
              figuré sur un plan daté de 1715, conservé au château de Crolles.
              De là, la conduite se dirigeait vers le château de Crolles, où
              elle alimentait différents bassins.
              <br /> <br />
              En 1787, lorsque Monsieur De Barral (propriétaire du château)
              concède aux habitants du bourg une partie de ses droits sur les
              sources, la canalisation est divisée pour alimenter la fontaine de
              la place de la Liberté.
            </p>
          </section>
          <div>
            <ComponentAqueduc />
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
