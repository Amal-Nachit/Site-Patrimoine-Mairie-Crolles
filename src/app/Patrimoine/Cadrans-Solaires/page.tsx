"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentCadrans } from "@/app/components/Carousels/Carousel-Cadrans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCheck } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Cadrans solaires</h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a
                    href="https://maps.app.goo.gl/Z4dRFMHc47SQy1Gp7"
                    className="hover:underline"
                    target="_blank"
                  >
                    Pl. de l'Église
                  </a>
                </p>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a
                    href="https://maps.app.goo.gl/YmAbrbmpW3QKZoUUA"
                    className="hover:underline"
                    target="_blank"
                  >
                    708 Rue Jean Moulin
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
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Moderne / Comtemporaine</p>
              </div>
            </div>
          </section>

          <div className="my-10">
            <figure className="flex flex-col items-center justify-center">
              <img
                src="/images/Cadrans-Solaires/1.jpg"
                alt="Cadrans"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                Rue Jean Moulin cadran solaire après restauration à
                l'identique
              </figcaption>
            </figure>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              L'origine
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              {"   "} L’origine des cadrans solaires semble se perdre dans la
              nuit des temps. D’après Hérodote, (Ve siècle av. J.C.), le gnomon
              viendrait de Babylonie. En grec ancien, gnomon signifie
              indicateur, c’est à dire le « style », aiguille dont l’ombre
              portée sur le cadran indique l’heure. Les cadrans antiques sont
              souvent sphériques, coniques ou tronconiques. Ils règlent la vie
              de la cité et surtout, donnent la latitude d’un lieu : plus
              l’équateur est proche, plus le soleil apparaît haut dans le ciel
              et donc plus l’ombre du style à midi est courte.
            </p>

            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Un peu d'histoire{" "}
            </h2>

            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Dès le XVIIIe siècle, l’essor des cadrans solaires est lié à celui
              des horloges publiques, qu’on règle sur les cadrans. Avant le XIXe
              siècle, chaque ville a son heure, mais l’essor du chemin de fer
              impose l’adoption d’une heure unique, basée sur le méridien de
              Paris puis, après 1911, sur celui de Greenwich. Les cadrans
              solaires sont très nombreux en Isère (près de six cents anciens ou
              modernes) et plus encore dans les Alpes, ce qui en fait des
              éléments patrimoniaux au sens premier du terme. Deux cadrans
              solaires sont visibles à Crolles : sur la façade de la cure et au
              708 rue Jean Moulin. Ce dernier est typique de l’Art populaire.
              Daté de 1861, les motifs d'angelots, anachroniques, indiquent
              qu'il pourrait être antérieur d’un siècle. D’après les
              inscriptions déchiffrées, ce cadran aurait été refait par François
              Capitan, maçon de père en fils à Crolles depuis le XVIIIe siècle.
              La maison date de 1667. Il a bénéficié d’une restauration en 2004.
              Quant à celui de la cure, il date du XVIIe siècle, mais il n’en
              subsistait que le style. Les recherches menées par le service
              Archives-Patrimoine pour retrouver trace de l’ancien cadran
              restant infructueuses, une re-création fut décidée en 2001.
              Monsieur Yves Guyot, cadranier-gnomoniste qualifié et membre de la
              Société Astronomique Française, a été retenu pour ce projet. Sur
              un crépi neuf à la chaux, réalisé selon les procédés
              traditionnels, le cadran a été peint avec un enduit composé de
              chaux aérienne éteinte, d’eau, de pigments naturels, et d’un liant
              synthétique souple, à raison de 3% du volume total, selon les
              normes de l’Inspection des Monuments Historiques.
            </p>
            <div className="lg:max-w-5xl md:max-w-2xl sm:max-w-1xl mx-auto sm:px-6 md:px-2 lg:px-6 py-8">
              <section className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-left text-black-600 underline mb-4">
                  Comment lire l’heure au cadran
                </h2>
                <p className="text-left text-black-600 leading-relaxed">
                  Le cadran a été calculé en fonction de la longitude et de
                  l’inclinaison du mur de la cure : il indique l’heure solaire
                  locale. Pour retrouver l’heure correspondant à votre montre,
                  il faut donc corriger celle affichée au cadran en fonction de
                  ces paramètres. Pour cela, procédez comme suit:
                  <ol>
                    <li>1. Notez l’heure solaire donnée par l’ombre;</li>
                    <li>
                      2. Rajouter une heure en hiver et deux heures en été
                    </li>
                    <li>
                      3. Corrigez le résultat obtenu à l’aide de la courbe
                    </li>
                  </ol>
                  <br />
                  <div className="">
                    <img
                      src="/images/Cadrans-solaires/Heure-cadran.png"
                      alt="Heure du cadran"
                      className="mx-auto"
                      width="800"
                      height="300"
                    />
                  </div>
                </p>
              </section>
            </div>
            <div className="lg:max-w-5xl md:max-w-2xl sm:max-w-1xl mx-auto sm:px-6 md:px-2 lg:px-6 py-8">
              <section className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-left text-black-600 underline mb-4">
                  Anecdote
                </h2>
                <p className="text-left text-black-600 leading-relaxed">
                  Pour témoigner de la richesse des cadrans solaires dans notre
                  région, un cadran solaire très particulier a été créé dans la
                  boucle de la sortie d’autoroute de Crolles venant de Grenoble
                  en direction de Chambéry.
                </p>
              </section>
            </div>
          </section>
          <div>
            <ComponentCadrans />
          </div>
          <div></div>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
