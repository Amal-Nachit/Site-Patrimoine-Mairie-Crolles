"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentFouilles } from "@/app/components/Carousels/Carousel-Fouilles";
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
              Fouilles archéologiques sur le site de l’Écoquartier
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
                    href="https://maps.app.goo.gl/AUxbXWyMwbqkLLLM7"
                    className="hover:underline"
                    target="_blank"
                  >
                    rue Charles de Gaulle
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
                <p className="text-sm">Moyen-Âge</p>
              </div>
            </div>
          </section>

          <div className="flex justify-center items-center my-10">
            <img
              src="/images/Fouilles/1.jpg"
              alt="Fouilles"
              className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
            />
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Les fouilles archéologiques menées sur le site de l’Écoquartier
              ont parlé !
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Ces fouilles se sont déroulées en deux temps : d’abord en 2018 sur
              le secteur de la Chantourne, situé le long de la rue Charles de
              Gaulle, puis au printemps 2019, sur celui de l’Agrion, le long de
              la rue François Mitterrand.
            </p>
          </section>

          <div>
            <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
              <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
                Certaines découvertes nous ramènent plus de 3000 ans en arrière
              </h2>
              <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
                Cette trouvaille restera sans doute comme la plus importante de
                la campagne de fouilles prescrites par l’État dans le cadre du
                projet d’aménagement de l’Écoquartier du parc. Un tumulus, sorte
                de structure circulaire composée de terre et de pierres abritant
                une sépulture, a été mise à jour sur le secteur de l’Agrion, à
                proximité de l’Espace Paul Jargot. Dans cette tombe, les restes
                du corps d’un défunt, « qui devait probablement être une figure
                aristocratique », selon Emmanuel Ferber de l’INRAP*. Pour étayer
                son hypothèse, l’archéologue s’appuie autant sur les vestiges du
                monument que sur les objets portés par le défunt lors de son
                inhumation. Un rasoir et des bijoux en bronze précisent l’époque
                : nous sommes entre 1000 et 3000 ans avant notre ère, juste
                avant l’apparition du fer.
              </p>
            </section>
            <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
              <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
                Rites funéraires
              </h2>
              <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
                De la cinquantaine de sépultures découvertes au cours des deux
                campagnes de fouilles, le tumulus constitue la plus
                significative, du fait de son caractère monumental et de son
                degré de conservation. D’autres, plus modestes, des bûchers et
                des dépôts de crémation, témoignent de rites similaires
                pratiqués quelques centaines d’années plus tard. Nous sommes
                cette fois au cœur de l’époque romaine, comme un flacon de verre
                (contenant sans doute du parfum), retrouvé intact, le laisse
                penser. Plusieurs vases en céramique, certes brisés mais
                méticuleusement reconstitués par les archéologues, témoignent
                également de ce passé lointain. Ces objets, restes d’ossements
                et autres échantillons de terre prélevés et passés au tamis,
                sont toujours en cours d’analyse. Ils feront l’objet d’un
                rapport scientifique de l’INRAP* qui sera rendu public dans les
                prochains mois.
              </p>
              <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4 italic">
                *Institut National de Recherche en Archéologie Préventive
              </p>
            </section>
          </div>
          <div>
            <ComponentFouilles />
          </div>
          <div>
            <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
              <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
                En savoir +
              </h2>
              <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
                <a
                  href="/pdf/Fouilles-archeologiques.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Archéologie préventive à Crolles (INRAP)
                </a>
                <br />
                <a
                  href="/pdf/depliant-fouilles.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Télécharger le dépliant
                </a>
                <br />
                <a
                  href="/pdf/cahier-jeux-archeologie.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Télécharger le cahier de jeux
                </a>
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
