"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentEglise } from "@/app/components/Carousels/Carousel-Eglise";
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
              Église Saint-Pierre - Saint-Paul
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
                    href="https://maps.app.goo.gl/RcB9x4kkZQguDeqD7"
                    className="hover:underline"
                    target="_blank"
                  >
                    Place de l'église
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
                  <p className="text-sm italic">(Ouverte la journée)</p>
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Moyen-Âge / Moderne</p>
              </div>
            </div>
          </section>

          <div className="my-10">
            <figure className="flex flex-col items-center justify-center">
              <img
                src="/images/Eglise/1.jpg"
                alt="L'Eglise"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                Église St Pierre St Paul 2010
              </figcaption>
            </figure>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 mb-8">
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              L’église Saint-Pierre – Saint-Paul est connue dès 1115 mais ne
              conserve de son état primitif que la base du clocher, le reste
              ayant été reconstruit entre 1648 et 1687.
              <br />
              <br />
              Une grande sobriété caractérise l’extérieur de l’édifice, de style
              roman. Les façades latérales sont rythmées de baies en
              plein-cintre et d’oculus alternant avec des contreforts. Au
              nord-ouest, au-dessus du portail Louis XIII, un fronton et trois
              oculus soulignent la structure pyramidale du toit.
              <br />
              <br />A l’intérieur, la nef est bordée de deux bas-côtés,
              surmontés de tribunes. Depuis 1983, un orgue constitué de deux
              buffets symétriques surplombe la nef. De part et d’autre du chœur,
              deux chapelles sont décorées de peintures datant de la fin du
              XVIIe siècle. Au sud, les lances, les marteaux, les tenailles et
              les dés qui décorent la voûte symbolisent la Passion du Christ ;
              au nord, des emblèmes de l’ancien testament se rapportent à la
              Vierge (tour d’ivoire, arche d’alliance). Dans le chœur, un autel
              en marqueterie se dresse devant un triptyque peint par Nicolai
              Greshny (artiste russe contemporain). Le retable, en trompe l’œil,
              est orné en son centre d’une œuvre du XVIIIe siècle, représentant
              Saint-Pierre et Saint-Paul.
            </p>
          </section>
          <div className="lg:max-w-5xl md:max-w-2xl sm:max-w-1xl mx-auto sm:px-6 md:px-2 lg:px-6 py-8">
            <section className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-left text-black-600 underline mb-4">
                Glossaire
              </h2>
              <p className="text-left text-black-600 leading-relaxed">
                <span className="text-black-600 font-bold italic">baie</span> :
                fenêtre ou ouverture dans un mur <br />
                <span className="text-black-600 font-bold italic">
                  bas-côté
                </span>{" "}
                : nef latérale de l'église flanquant la nef centrale, dont la
                voûte est moins élevée que celle de la nef principale <br />
                <span className="text-black-600 font-bold italic">
                  choeur
                </span>{" "}
                : partie de l'église dont l'accès est réservé au clergé,
                comprenant le sanctuaire qui abrite l'autel et la partie où se
                chante l'office <br />
                <span className="text-black-600 font-bold italic">
                  contreforts{" "}
                </span>{" "}
                : massif de maçonnerie élevé contre un mur pour l'épauler,
                assurant la stabilité d'un édifice <br />
                <span className="text-black-600 font-bold italic">fronton</span>
                : morceau d'architecture triangulaire ou en demi-cercle qui
                couronne l'entablement (partie au sommet des murs qui supporte
                la charpente de la toiture) <br />
                <span className="text-black-600 font-bold italic">nef</span> :
                partie centrale où se tiennent les fidèles <br />
                <span className="text-black-600 font-bold italic">
                  oculus
                </span>{" "}
                : petite ouverture ronde dans un mur <br />
                <span className="text-black-600 font-bold italic">
                  (en) plein-cintre
                </span>{" "}
                : composé d'un demi-cercle <br />
                <span className="text-black-600 font-bold italic">
                  {" "}
                  retable{" "}
                </span>{" "}
                : construction verticale portant des décors sculptés et/ou
                peints, placé en arrière de la table d'autel <br />
                <span className="text-black-600 font-bold italic">
                  tribune
                </span>{" "}
                : galerie voûtée au-dessus des bas-côtés ou du narthex
                (vestibule ou porche qui précède la nef) ayant des petites
                arcades décoratives, ouverte sur la nef
              </p>
            </section>
          </div>

          <div>
            <ComponentEglise />
          </div>
          <div>
            <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
              <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
                En savoir +
              </h2>
              <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
                <a
                  href="/documents-pdf/plan-eglise.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Plan de l'église réalisé par Georges Fort
                </a>
              </p>
            </section>
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
