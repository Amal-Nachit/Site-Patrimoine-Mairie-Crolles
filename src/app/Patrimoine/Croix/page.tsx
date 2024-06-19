"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentCroix } from "@/app/components/Carousels/Carousel-Croix";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCheck } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Les Croix</h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a href="" className="hover:underline" target="_blank">
                    Crolles
                  </a>
                </p>
              </div>
              <div className="flex flex-col mr-20">
                <h3 className="text-lg font-semibold mb-1 mx-8">
                  Accessible au public :
                </h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faCheck} className="mr-2" />
                  Oui <br />
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Moderne / Contemporaine</p>
              </div>
            </div>
          </section>

          <div className="flex justify-center items-center my-10">
            <div className="mx-auto lg:mx-auto sm:w-1/2">
              <img
                src="/images/Croix/1.jpg"
                alt="Croix"
                className={`lg:w-1/2 lg:mx-auto object-contain rounded-lg`}
              />
            </div>
          </div>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Il existe peu d’éléments historiques sur les croix dans les
              archives. Les informations sont souvent données par les
              inscriptions elles-mêmes mais la tradition orale tient une place
              importante. 
              <br /> <br />
             Les croix peuvent être dressées à plusieurs occasions
              : la fin d’une Mission (la croix située devant la MJC témoigne de
              la procession ramenant les reliques de Saint-Adeodat), la
              protection des cultures ou la commémoration d’évènements
              tragiques. Lors d’une épidémie de peste en 1550, des croix en fer
              forgé ont été mises en place sur les murs de Crolles. 
              <br /> <br />
Une dizaine de croix a été recensée sur l'ensemble du territoire crollois.
              Beaucoup sont en fer forgé et certaines ont pour base des meules
              de moulin.
            </p>
          </section>
          
          <div>
            <ComponentCroix />
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
