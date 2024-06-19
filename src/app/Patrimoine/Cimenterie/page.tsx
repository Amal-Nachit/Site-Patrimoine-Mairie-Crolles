"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentCimenterie } from "@/app/components/Carousels/Carousel-Cimenterie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Cimenterie</h1>
            <div className="flex justify-center">
              <hr className="mt-6 mb-16 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16 sm:mx-5">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a
                    href="https://maps.app.goo.gl/ybTmygzLL1UnJJdL9"
                    className="hover:underline"
                    target="_blank"
                  >
                    Chemin du Château Robert
                  </a>
                </p>
              </div>
              <div className="flex flex-col mr-20">
                <h3 className="text-lg font-semibold mb-1 mx-8">
                  Accessible au public :
                </h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faXmark} className="mr-2" />
                  Non <br />{" "}
                  <p className="text-sm italic">
                    (Seuls quelques vestiges sont visibles)
                  </p>
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
                src="/images/Cimenterie/1.jpg"
                alt="La Cimenterie"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                VII.C.2.168.2005.05.21. Cimenterie, mine.cl Claude Gloeckle.
              </figcaption>
            </figure>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              La fondation
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              L'exploitation du ciment à Crolles débute au milieu du XIXème
              siècle. C'est en 1817 que Louis Joseph Vicat met au point le
              ciment artificiel, "l'or gris". Son fils crée la première usine à
              Grenoble dans les années 1840. Cette révolution technologique
              séduit plusieurs industriels qui se lancent dans l'aventure, les
              usines fleurissent.
              <br /> <br />
              En 1855, Paul Jouclard de Bernin, demande l'autorisation d'établir
              un four à ciment puis quelques années plus tard un moulin.
            </p>
          </section>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Un peu d'histoire
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              L'usine est installée dans la gorge du ruisseau de Crolles, en
              aval de la cascade. Sa situation est idéale : le calcaire et la
              marne, matières premières, le bois pour la cuisson et la force
              hydraulique pour entraîner les roues des moulins sont à portée de
              main. Les éléments essentiels sont réunis pour permettre à cette
              industrie de prospérer pendant plus d'un demi-siècle.
              <br /> <br />
              Les directeurs se succèdent et chacun, en poursuivant l'essor de
              l'entreprise, participe à la vie de la commune. En 1866, le
              Conseil Municipal demande à ce que la poste installe un bureau de
              direction pour faciliter les opérations financières de tous ceux
              qui commercent, entre autres les fabricants de ciment. L'entretien
              des chemins étant très coûteux, ils se proposent de contribuer à
              la dépense.
              <br /> <br />
              Un des directeurs, M. Marsallat apporte sa contribution pour le
              rachat du péage du pont de Brignoud. Ses successeurs, M.M
              Rossignol et Delamarche participent à la modernisation de la
              commune en devenant concessionnaires de la ligne d'éclairage en
              1895, en payant le branchement au réseau téléphonique en 1900.
              <br />
              <br />
              L'exploitation cesse à l'aube du premier conflit mondial, l'usine
              est rachetée par la maison Vicat.
            </p>
          </section>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Les directeurs
            </h2>
            <ul className="sm:mx-10 md:mx-4 lg:mx-32 mb-4 list-disc list-inside">
              <li>Paul Jouclard</li>
              <li>M.M Guichard et Martin </li>
              <li>Société Marcellin, Brotte, Martin et Cie </li>
              <li>Marsallat et Cie </li>
              <li>M.M Rossignol et Delamarche </li>
            </ul>
          </section>
          <div>
            <ComponentCimenterie />
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
