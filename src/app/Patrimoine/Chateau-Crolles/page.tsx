"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentChateauCrolles } from "@/app/components/Carousels/Carousel-Chateau-Crolles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Château de Crolles</h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a
                    href="https://maps.app.goo.gl/7CYCTEoZMLgkGyyX7"
                    className="hover:underline"
                    target="_blank"
                  >
                    Rue de Belledonne
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
                <p className="text-sm">Moyen âge / Moderne</p>
              </div>
            </div>
          </section>

          <div className="my-10">
            <figure className="flex flex-col items-center justify-center">
              <img
                src="/images/Chateau-Crolles/1.jpg"
                alt="Château de Crolles"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                Château de Crolles, portail en fer forgé.Cliché Jérôme
                Stéfanini
              </figcaption>
            </figure>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 mb-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              La fondation
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Le château de Crolles est une ancienne maison forte, construite en
              1340 par Amblard de Beaumont, seigneur de Crolles et de Montfort,
              créateur de l’université de Grenoble. Le château est composé de
              deux bâtiments de plan rectangulaire, disposés dans le
              prolongement l’un de l’autre avec, au nord, deux massives tours
              rondes.
            </p>
          </section>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Un peu d'histoire
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              La demeure a connu de grands changements au cours du XVIIème
              siècle avec son propriétaire Claude Frère, premier Président au
              Parlement du Dauphiné. À cette époque ont été construits dans le
              bâtiment principal la grande galerie ornée de peintures du XVIIème
              siècle avec son plafond à la française et un petit salon orné de
              boiseries du XVIIIème siècle.
              <br /> <br /> Au XVIIIe siècle, en 1715 précisément, Dabaux trace
              un plan du château. Le parc est alors agrémenté de pièces d’eau,
              de bassins, de vignes, d’une orangerie, de vignes, de vergers, de
              potagers…
              <br /> <br />
              Le château a connu de nombreux propriétaires issus de grandes
              familles de la région. Longtemps possession des présidents du
              Parlement de Grenoble, ce domaine est lié à la vie du Dauphiné
              jusqu’au début du IXè siècle. Il est depuis 1810 propriété de la
              famille De Bernis. Le château de Crolles est une propriété privée
              et n'est ouvert aux visites qu'à l'occasion d'événements
              ponctuels.
            </p>
          </section>
          <div className="lg:max-w-5xl md:max-w-2xl sm:max-w-1xl mx-auto sm:px-6 md:px-2 lg:px-6 py-8">
            <section className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-left text-black-600 underline mb-4">
                Anecdotes
              </h2>
              <p className="text-left text-black-600 leading-relaxed">
                Le château de Crolles reçut quelques visiteurs illustres La nuit
                du 15 août 1600, Henri IV coucha au château. Louis XIII et
                Richelieu furent reçus en 1639. Ce dernier envoya plus tard son
                portrait au château, actuellement en possession des
                propriétaires.
              </p>
            </section>
          </div>
          <div>
            <ComponentChateauCrolles />
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
