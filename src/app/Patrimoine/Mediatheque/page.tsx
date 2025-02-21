"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentMediatheque } from "@/app/components/Carousels/Carousel-Mediatheque";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCheck } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">
              Médiathèque, ancien relais de diligences
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
                    href="https://maps.app.goo.gl/QU7azSHYwe6qz8LS6"
                    className="hover:underline"
                    target="_blank"
                  >
                    120, avenue de la Résistance
                  </a>
                </p>
              </div>
              <div className="flex flex-col mr-20">
                <h3 className="text-lg font-semibold mb-1 mx-8">
                  Accessible au public :
                </h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faCheck} className="mr-2" />
                  Oui
                  <p className="text-sm italic">(Actuelle médiathèque)</p>
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
                src="/images/Mediatheque/1.jpg"
                alt="La Mediatheque"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
            </figure>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 mb-8">
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Le relais de diligence de Crolles s’appelait « A l’Auberge du Lion
              d’Or ». Propriété de la famille Chatain depuis le XVIII siècle, ce
              bâtiment a été un relais de diligence de 1749 à 1770. Il abritait
              14 chambres et une écurie de 400 m2.
              <br />
              <br />
              Les diligences, très prisées à l’époque des diplomates, militaires
              et autres entraient d’un côté du bâtiment pour en ressortir de
              l’autre. Les voyageurs et surtout les chevaux faisaient l’objet de
              tous les soins (écuries spacieuses et confortables, vétérinaires,
              paille et foin…).
              <br />
              <br />
              Ces relais étaient aussi des auberges où les voyageurs pouvaient
              se restaurer et dormir.
              <br /> <br />     
              L’auberge, devenue café de campagne très fréquenté, a fermé ses
              portes en 1973.
              <br /> <br />
              Aujourd’hui, une partie de ce bâtiment patrimonial a été
              réhabilité et accueille la médiathèque.
            </p>
          </section>
          
          <div>
            <ComponentMediatheque />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
