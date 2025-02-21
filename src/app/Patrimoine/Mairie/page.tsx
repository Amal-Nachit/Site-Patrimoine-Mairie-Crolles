"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentMairie } from "@/app/components/Carousels/Carousel-Mairie";
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
              Mairie et écoles, maison juillet
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
                    href="https://maps.app.goo.gl/YsiaCqzvJpB5ZoJTA"
                    className="hover:underline"
                    target="_blank"
                  >
                    30, Place de la mairie
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
                  <p className="text-sm italic">(Visible)</p>
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Contemporaine</p>
              </div>
            </div>
          </section>

          <div className="my-10">
            <figure className="flex flex-col items-center justify-center">
              <img
                src="/images/Mairie/1.jpg"
                alt="La Mairie"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                IV.I.038.1933 Fête de l'école Coll. Mme Doche Marguerite, école
                Cascade
              </figcaption>
            </figure>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 mb-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              La fondation
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              La première maison communale de Crolles s’est installée en 1851
              dans la « Maison Juillet » (située le long de la route
              départementale, à l’angle de la rue de l’Eperon, en direction de
              Montfort). Elle abritait à l’étage l’école des garçons.
              L’éducation des filles était faite au couvent de Crolles (ancien
              institut rural été ancien hôpital temporaire durant la guerre
              14-18).
            </p>
          </section>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Un peu d’histoire
            </h2>

            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              En 1884, une nouvelle mairie fut construite sur son emplacement
              actuel par l’architecte Monsieur Riondet. Elle abritait également
              l’école des garçons. Les filles ont du attendre 1907 la
              construction de l’école des filles (école Cascade).
              <br />
              <br />
              Deux foires annuelles (12 mars et 11 novembre) contribuèrent à la
              prospérité de Crolles dès 1617. A partir de 1900 , la foire se
              tient sur la place de la mairie, les marchands forains d’un côté,
              les bestiaux de l’autre.
              <br />
              <br />
              Aujourd’hui, cette foire est remplacée par le marché hebdomadaire
              du dimanche.
            </p>
          </section>
            <section className="bg-gray-100 p-4 rounded-lg shadow-md my-8 mx-64">
              <h2 className="text-2xl font-bold text-left text-black-600 underline mb-4">
                Anecdote
              </h2>
              <p className="text-left text-black-600 leading-relaxed">
                Le premier maire de Crolles s’appelait Thomas Gavet et a été
                maire de 1790 à 1802.
              </p>
            </section>

          <div>
            <ComponentMairie />
          </div>

            <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
              <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
                En savoir +
              </h2>
              <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
                <a
                  href="/documents-pdf/Journal municipal, septembre 1996.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Journal municipal, septembre 1996
                </a>
              </p>
            </section>
            
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
