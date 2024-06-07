"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { Component } from "@/app/components/Carousels/Carousel-Abbaye";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
import DataPatrimoine from "@/app/components/data/DataPatrimoine";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Abbaye des Ayes</h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a
                    href="https://maps.app.goo.gl/pQ4SqvbT49rhGAA86"
                    className="hover:underline"
                    target="_blank"
                  >
                    100 Rue Elsa Triolet
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
                <p className="text-sm">Moyen-Âge / Moderne</p>
              </div>
            </div>
          </section>

          <div className="flex justify-center items-center my-10">
            <img
              src="/images/Abbaye-des-Ayes/1.jpg"
              alt="Abbaye des Ayes"
              className="w-2/5 object-contain"
            />
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 mb-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              La fondation
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Marguerite de Bourgogne, veuve du Dauphin Guigues IV, lia son
              destin et son histoire a ceux de notre commune, en fondant
              l'abbaye des Ayes vers 1141. De filiation cistercienne* et soumise
              aux abbés de Tamié (en Tarantaise-Savoie), l'abbaye, dédiée a
              Notre-Dame, attire alors nombre de religieuses de nobles familles
              dauphinoises.
            </p>
          </section>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Un peu d'histoire
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4 font-bold italic">
              L'ancien Régime
            </p>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Dès sa fondation, l'abbaye s'enrichit de nombreuses donations de
              la part des dauphins et des seigneurs voisins. Ces donations sont
              confirmées par une bulle du pape Adrien IV qui prend l'abbaye sous
              sa protection. Grâce a ces fonds, un monastère avec dortoirs,
              réfectoire, puis une église et trois chapelles sont construits.
              <br />
              Au VIe siècle, c'est la période des guerres de religion. L'abbaye
              est en partie détruite et toutes les donations sont perdues par
              usurpations et pillages des huguenots. L'église et certains
              bâtiments sont alors reconstruits.
              <br />
              En 1648, l'abbaye est nouveau dévastée par un incendie. Afin de
              réparer les bâtiments et construire une nouvelle église, Louis XIV
              accorde aux religieuses un impôt extraordinaire sur le sel. C'est
              certainement de cette campagne de travaux que date le bâtiment
              encore visible aujourd'hui actuel (le logis de l'abbesse). Au
              cours du xviiie siècle, les efforts pour faire réformer les
              abbayes cisterciennes de cette région, dont les mœurs étaient très
              dissolues, restent vains. De petits groupes de religieuses
              porteuses d'un idéal rigoureux se détachent alors des anciens
              monastères pour fonder des congrégations bernardines. C'est ainsi
              que des religieuses venant de l'abbaye des Ayes fondent le couvent
              des Bernardines de Sainte-Cécile a Grenoble en 1624.
            </p>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4 font-bold italic">
              La Révolution
            </p>

            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Le 12 août 1790, le maire de Crolles informe les officiers
              municipaux que, selon le décret de l'assemblée nationale sur la
              vente des biens ecclésiastiques et nationaux, les biens de
              l'abbaye doivent être mis en vente. Un inventaire est alors
              réalisé. Celui-ci cite notamment la maison religieuse, une vaste
              église, plusieurs granges, une maison fermière, un cellier, un
              hangar, des moulins et d'autres bâtiments d'exploitation. En 1791,
              le domaine est acheté par M. César de Chaléon, conseiller de
              l'ancien Parlement de Grenoble et député de la noblesse aux Etats
              Généraux.
              <br />
              <br />
              Ce sont les derniers vestiges de l’ordre de Citeaux dans le
              département ; le logis est inscrit aux Monuments Historiques
              depuis 1990.
            </p>
          </section>
          <div className="lg:max-w-5xl md:max-w-2xl sm:max-w-1xl mx-auto sm:px-6 md:px-2 lg:px-6 py-8">
            <section className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-left text-black-600 underline mb-4">
                Anecdotes
              </h2>
              <p className="text-left text-black-600 leading-relaxed">
                La légende raconte que Marguerite de Bourgogne lors d'un séjour
                dans sa résidence aux Petites Roches, alors qu'elle priait, vit
                un flambeau suspendu dans les airs se poser dans la vallée sur
                les bords de l'Isère. Cette vision perçue comme un message divin
                révéla l'endroit qu'elle cherchait pour fonder un couvent.{" "}
                <br />
                <br />
                Le nom des Ayes vient du lieu, bordé de buissons et de ronces,
                nommés ayes en parlé local.
              </p>
            </section>
          </div>

          <div>
            <Component />
          </div>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Bibliographie / Pour aller + loin
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              <span className="italic first-line ">
                Trois abbayes de cisterciennes en Dauphiné du XIIe siècle à la
                Révolution,
              </span>{" "}
              Marie-Renée Michel, OPUS Edition. Consultable au service
              patrimoine de la commune de Crolles <br /> <br />*{" "}
              <a
                href="https://fr.wikipedia.org/wiki/Ordre_cistercien"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                target="_blank"
              >
                Plus d'informations sur l'Ordre cistercien ou ordre de Citeaux
              </a>
            </p>
          </section>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
