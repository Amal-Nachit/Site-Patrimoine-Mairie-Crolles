"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentFour } from "@/app/components/Carousels/Carousel-Four";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCheck } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Le Four à pain</h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a
                    href="https://maps.app.goo.gl/QPujq9cpewjDGUDD8"
                    className="hover:underline"
                    target="_blank"
                  >
                    1, Rue de l'Eperon
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
                    (Four ouvert au public de façon ponctuelle. <br /> Voir
                    auprès de l'association)
                  </p>
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Contemporaine</p>
              </div>
            </div>
          </section>

          <div className="flex justify-center items-center my-10">
            <img
              src="/images/Four-pain/1.jpg"
              alt="La Four"
              className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
            />
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 mb-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              La fondation
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              En 1934, la famille Jacob achète une parcelle quartier du Brocey
              sur laquelle se trouve un four construit par Monsieur Gillio.
              C’est alors un four banal : les gens du village en ont le droit
              d’usage (jusque dans les années 60). Devenu privatif, la famille
              le cède le four en 2010. Dans le cadre de sa politique de
              valorisation du patrimoine, celle-ci décide de le réinstaller rue
              de l’Eperon.
            </p>
          </section>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              La fabrication du pain : propos recueillis auprès de François
              Jacob
            </h2>

            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              « La fabrication du pain commençait à 5 heures, ils pétrissaient à
              la main car pas de pétrin mécanique. Le pétrin à main était en
              noyer. Le levain était préparé la veille.
              <br />
              <br />
              On mettait 25 kg de pâte dans le pétrin qu’on laissait reposer 2
              ou 3 heures. Ensuite on cassait la pâte, pétrissait, et de nouveau
              elle reposait 1 heure. Puis on la façonnait et on la mettait dans
              une paillasse, et repos. On faisait 2 kg de pain : des pains
              longs, quelques boules, des petits pains.
              <br />
              <br />
              Vers 11 heures tout était prêt à enfourner. On faisait aussi la
              pâtisserie, le pain de Pâques, des tartes, des meringues. Les
              femmes faisaient les gratins de pommes de terre. On faisait le
              pain toutes les semaines ou tous les 15 jours. Ça prenait une
              matinée. Le four commençait à chauffer vers 7 ou 8 heures du matin
              quand il avait servi dans la semaine ; sinon, il fallait le faire
              chauffer la veille 1 ou 2 heures. Pour le chauffer, on utilisait
              des fagots de sarments de 8 à 10 kg. On jetait du son pour
              vérifier la température après avoir retiré les cendres. Il fallait
              ¾ d’heure à 1 heure de cuisson. »
              <br />
              <br />
              Aujourd’hui, le four est géré par l’association du four à pain.
            </p>
          </section>
          <div>
            <ComponentFour />
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
