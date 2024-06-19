
"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentCouvent } from "@/app/components/Carousels/Carousel-Couvent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Ancien couvent</h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a
                    href="https://maps.app.goo.gl/Ab1LVxLjAejTefgB9"
                    className="hover:underline"
                    target="_blank"
                  >
                    73 Chem. de la Falaise
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
                  <p className="text-sm italic">
                    (Bâtiment réhabilité en logements)
                  </p>
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Comtemporaine</p>
              </div>
            </div>
          </section>

          <div className="flex justify-center items-center my-10">
            <img
              src="/images/Ancien-Couvent/1.jpg"
              alt="Abbaye des Ayes"
              className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
            />
          </div>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Un peu d'histoire
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4 font-bold italic">
              Au XIXème siècle
            </p>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              En 1820, cet ensemble patrimonial abrite le couvent de Crolles,
              fondé par Alexandrine Paturel. Il appartient, à partir de 1866,
              aux sœurs de la Providence de Corenc. En 1850, la loi rend
              obligatoire l’éducation des filles ; une classe est alors créée
              dans le couvent.
            </p>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4 font-bold italic">
              Pendant les guerres mondiales
            </p>

            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Il devient par la suite la résidence de la famille Vincent-Byland.
              Dès le mois d’août 1914, un hôpital temporaire de 60 lits, destiné
              à accueillir et soigner les soldats blessés, y est établi. Eugène
              Byland est alors le directeur de l’hôpital. Sa fille Andréa
              (1886-1944), mariée à Louis Vincent, adjudant télégraphiste, est
              infirmière bénévole. C'est à ce titre, et en reconnaissance à son
              dévouement, que le ministère de la Guerre lui décerne en 1918
              l’Insigne Spécial en argent. A partir de 1943, les lieux
              retrouvent leur mission éducative en devenant Maison Familiale
              d’Enseignement Rural, destinée à former les futurs paysans. Une
              formation technique (culture générale, mise en œuvre de la
              monoculture, gestion d’une entreprise agricole…) est dispensée
              essentiellement aux jeunes sous forme de sessions d’hiver ou de
              stages. A partir de 1965, les formations sont permanentes, et
              chaque été, l’établissement est transformé en centre d’accueil de
              colonies de vacances. C’est en 2001 que la Maison Familiale quitte
              l’Institut rural pour des locaux neufs, rue Emmanuel Mounier.
            </p>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4 font-bold italic">
              Aujourd'hui
            </p>

            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Depuis, l’ancien bâtiment a été réhabilité. Une nouvelle résidence
              intergénérationnelle a été construite dans son prolongement. Cet
              habitat porte le nom de « La Cotinière ». Quant aux anciens
              ateliers, ils accueillent aujourd’hui des bureaux pour les
              associations, un espace commun et un boulodrome.
            </p>
          </section>
          <div>
            <ComponentCouvent />
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
