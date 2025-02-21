"use client";
import React from "react";
import Header from "../../includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentViticulture } from "@/app/components/Carousels/Carousel-Viticulture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">La viticulture</h1>
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
                src="/images/Viticulture/1.jpg"
                alt="La Viticulture"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                Fonds privé C. Amauriq, années 70
              </figcaption>
            </figure>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Un peu d'histoire
            </h2>
            <p className="sm:mx-auto md:mx-auto lg:mx-32 mb-4">
              Il semblerait que ce soient les Grecs qui aient introduit la
              viticulture dans la vallée du Rhône : les vignobles prospéraient
              sur les pentes ensoleillées des Préalpes calcaires, notamment sur
              la rive droite de l’Isère. Par la suite, ce sont les Romains,
              grands amateurs de vin épicé, qui reprennent, poursuivent et
              développent cette culture.
              <br />
              <br />
              Au Moyen Âge, les moines de Cluny, installés à Domène, participent
              activement à l’essor de la viticulture le long de l’Isère. Ainsi,
              à partir du XIe siècle, la vigne règne sur les côteaux du
              Grésivaudan.
              <br />
              <br />
              Mais après 1860, elle est touchée par le phylloxera, puceron
              parasite qui détruit feuilles et racines des ceps. Le vignoble
              Isérois régresse considérablement et les contours des cultures du
              territoire sont redessinés.
              <br />
              <br />
              Depuis quelques années, nous assistons toutefois à un nouvel élan
              de la culture de la vigne et les vins des côteaux du Grésivaudan
              sont remis à l’honneur grâce au travail de vignerons passionnés.
            </p>
          </section>

          <div>
            <ComponentViticulture />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
