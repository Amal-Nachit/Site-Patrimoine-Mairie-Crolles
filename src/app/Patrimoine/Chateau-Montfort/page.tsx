"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentChateauMontfort } from "@/app/components/Carousels/Carousel-Chateau-Montfort";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCheck } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Château de Montfort</h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a
                    href="https://maps.app.goo.gl/AXVurPiHcVCgrEUy7"
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
                  <FontAwesomeIcon icon={faCheck} className="mr-2" />
                  Oui <br />{" "}
                  <p className="text-sm italic">(Vestiges visibles)</p>
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Moyen âge</p>
              </div>
            </div>
          </section>

          <div className="my-10">
            <figure className="flex flex-col items-center justify-center">
              <img
                src="/images/Chateau-Montfort/1.jpg"
                alt="Château de Montfort"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                30-07-10 Château Montfort
              </figcaption>
            </figure>
          </div>
          
          <section className="sm:mx-8 md:mx-4 lg:mx-32 mb-8">
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Adossé au massif de Chartreuse, sur un tertre dominant la vallée
              du Grésivaudan, le château de Montfort fait face à la chaîne de
              Belledonne. Au Moyen Âge, cette forteresse participait à la
              défense du Dauphiné contre la Savoie : ainsi, dix châteaux au
              moins sont attestés dans la vallée, auxquels s’ajoutent tours et
              maisons fortes. Le château de Montfort, bien que tourné vers la
              vallée, verrouillait aussi le Pas de la Ferté (actuel Pal de Fer),
              alors seul accès au plateau des Petites Roches.
            </p>
          </section>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              La fondation
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              La première mention de Montis Fortis remonte à 1069, dans le
              cartulaire de Domène ; il est probable qu’une motte castrale
              (édifice avec tour et palissade de bois) était dressée sur ce
              promontoire naturel.
              <br /> <br />
              L’édification du château de pierre remonte au XIIIème siècle :
              après la construction d’une tour carrée –probablement au XIIème
              siècle– à double fonction de défense et d’habitat, remparts et
              pièces d’habitation viennent compléter le château.
              <br /> <br />
              Dans une enquête de 1339 réalisée pour l’évaluation du domaine
              delphinal, le château est décrit comme se composant d'une enceinte
              circulaire de 47 toises de longueur (près de 100 mètres), à
              l'intérieur de laquelle prennent place plusieurs édifices. Une
              tour de plan quadrangulaire, haute de 28 mètres et possédant
              quatre étages, deux salles superposées dont l'une est chauffée par
              une cheminée et éclairée par quatre baies géminées, des pièces
              appelées chambres avec garde-robe et cellier, une cuisine.
              L'entrée du château est défendue par un portail de pierre surmonté
              d'une salle de garde.
            </p>
          </section>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Un peu d'histoire
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Résidence de la Grande Dauphine Béatrix de Faucigny, puis
              possession de la famille de Beaumont jusqu’en 1617, le château
              devient la propriété de Claude Frère et de ses descendants. En
              1717, il appartient ensuite aux Guérin, ascendants de la famille
              de Bernis, actuels propriétaires.
              <br /> <br />
              Le château tombe en ruines au XVIe siècle ; seule la salle des
              gardes restera habitée jusqu’au début du XXè siècle.
              <br /> <br />
              Depuis 1999, la commune de Montfort a passé une convention avec
              l’association Les Raisonneurs de Pierre qui œuvre à la
              restauration et à l’animation de ce site longtemps oublié, faisant
              ainsi revivre ce témoin de notre histoire passée.
            </p>
          </section>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              En savoir +
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              <a
                href="https://www.lesraisonneursdepierre.fr/"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                target="_blank"
              >
                Association Les Raisonneurs de Pierre
              </a>
            </p>
          </section>
          <div>
            <ComponentChateauMontfort />
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
