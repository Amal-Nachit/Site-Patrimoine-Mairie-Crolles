"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentCure } from "@/app/components/Carousels/Carousel-Cure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCheck } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">La Cure</h1>
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
                    33, Place de l'église
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
                  <p className="text-sm italic">
                    (Bâtiment visible de l'extérieur)
                  </p>
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Moderne</p>
              </div>
            </div>
          </section>

          <div className="my-10">
            <figure className="flex flex-col items-center justify-center">
              <img
                src="/images/Cure/1.jpg"
                alt="La Cure"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                Cure de Crolles façade sud est. J.Stéfanini.
              </figcaption>
            </figure>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 mb-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              La fondation
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              La cure date du XVIIe siècle. Elle s’élève sur trois niveaux. On
              remarque au rez-de- chaussée une magnifique cheminée dont la
              plaque ne fonte porte l’inscription « DIV SOIT CANS M. FABRI » : «
              Dieu soit céans M. du Faure ». De chaque côté, on peut y lire les
              chiffres C.D et C.L soit 1650, ce qui pourrait dater cet édifice.
            </p>
          </section>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Visite générale du diocèse en 1673 par Monseigneur Le Camus,
              Crolles le 25 janvier 1673
            </h2>

            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              « Le curé entretient un grand verger, un beau jardin… De sa maison
              qui est sans exagérer une des plus belles maisons curiales qu’il y
              ait en France, tant pour sa beauté et la grandeur du baptistère
              que pour la régularité. Il y a quatre chambres et un cabinet au
              premier étage aussi bien qu’au second, outre la cave, il y a une
              chambre souterraine fort commode pour l’hiver comme pour l’été.
              Mention est faite d'une grange et d'un pressoir. Le tout a été
              bâti de pierres dont les curés possèdent le bénéfice. »
              <br />
              De mémoire locale, deux souterrains partiraient de la cure : un
              vers l’abbaye des Ayes et l'autre vers le château de Crolles. Des
              soupiraux, dans la cour de la cure, éclairent un début de galerie,
              fermée par des monceaux de terre.
            </p>
          </section>
          <div className="lg:max-w-5xl md:max-w-2xl sm:max-w-1xl mx-auto sm:px-6 md:px-2 lg:px-6 py-8">
            <section className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-left text-black-600 underline mb-4">
                Anecdote
              </h2>
              <p className="text-left text-black-600 leading-relaxed">
                Le souterrain de l’abbaye aurait été construit à ciel ouvert
                puis fermé par des dalles. Dans les années 1940, un cheval s’est
                cassé une jambe aux environs de l’actuel terrain de football, en
                passant au travers du sol. En 1995, pendant la construction du
                lotissement des Castors, un camion est également tombé suite à
                un effondrement de terrain.
              </p>
            </section>
          </div>

          <div>
            <ComponentCure />
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
