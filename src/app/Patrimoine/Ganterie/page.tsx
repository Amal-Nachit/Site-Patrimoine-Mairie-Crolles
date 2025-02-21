"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Ganterie</h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a href="" className="hover:underline" target="_blank"></a>
                </p>
              </div>
              <div className="flex flex-col mr-20">
                <h3 className="text-lg font-semibold mb-1 mx-8">
                  Accessible au public :
                </h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faXmark} className="mr-2" />
                  Non
                  <p className="text-sm italic"></p>
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
                src="/images/Ganterie/1.jpg"
                alt="La Moulin"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                Gantières au pied de Crolles. Coll. G Grambin.
              </figcaption>
            </figure>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 mb-8">
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Au XIXe et au début du XXe siècle, beaucoup de femmes travaillent
              à domicile pour les gantiers de Grenoble. Cette activité permet
              ainsi à de nombreuses familles rurales d’améliorer leur quotidien.
            </p>
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Propos recueillis auprès de Germaine Colleon par Valérie Valenza,
              mars 2007
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              « Peu de femmes travaillaient, elles restaient chez elles et
              cousaient à la main ou à la machine, par exemple Joséphine Chatain
              et Joséphine Magnin. On venait chercher le fil, les gants étaient
              coupés, on avait juste à les assembler ensuite. Par jour, on
              arrivait à faire jusqu’à quatre à cinq paires à la main, on
              n’avait pas de machine. Joséphine Magnin allait chercher les gants
              à Grenoble au fournisseur et elle les distribuait pour les coudre.
              On était très peu payé mais c’était un petit apport. Les hommes
              étaient à l’usine et cultivaient un lopin de terre. »
              <br /> <br />« J’ai toujours vu ma maman et ma tante faire les
              gants à la main, pas à la machine. Quand je rentrais de l’école,
              des fois je les aidais. Je faisais quelques paires de gants, je
              faisais le pouce, ça les avançait »
            </p>
          </section>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Propos recueillis auprès de Simone Cuttaz par Valérie Valenza,
              février 2008
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              « J’en ai vu des gantières au pied de Crolles juste à côté de la
              rue du Lac. C’était la Jeanne Coche et la Charlotte Guirand. Elles
              étaient toutes les deux là dehors avec leur machine, à l’angle de
              la rue, elles travaillaient et discutaient avec tous ceux qui
              passaient. J’ai vu Monsieur Lana couper les gants. »
            </p>
          </section>

          <section className="sm:mx-8 md:mx-4 flex justify-center">
            <figure className="flex flex-col items-center justify-center w-1/4 mr-12">
              <img
                src="/images/Ganterie/2.jpg"
                alt="dernières machines à coudre"
                className="mx-auto w-full object-contain rounded-lg"
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                Dernières machines à coudre
              </figcaption>
            </figure>

            <figure className="flex flex-col items-center justify-center w-1/4">
              <img
                src="/images/Ganterie/3.jpg"
                alt="gantières du pied de Crolles. Coll. G Grambin."
                className="mx-auto w-full object-contain rounded-lg"
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                Gantières du pied de Crolles. Coll. G Grambin.
              </figcaption>
            </figure>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
