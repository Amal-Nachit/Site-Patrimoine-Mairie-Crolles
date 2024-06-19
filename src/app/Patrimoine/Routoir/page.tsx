"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentRoutoir } from "@/app/components/Carousels/Carousel-Routoir";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCheck } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Routoir</h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a
                    href="https://maps.app.goo.gl/MYA57ascsvQwG3Nm8"
                    className="hover:underline"
                    target="_blank"
                  >
                    Rue Lionel Terray
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
                  <p className="text-sm italic">(Visible de la rue)</p>
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
                src="/images/Routoir/1.jpg"
                alt="La Routoir"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                Routoir rue Lionel Terray. J.Stéfanini
              </figcaption>
            </figure>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 mb-8">
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Un routoir est un bassin utilisé pour tremper des plantes. Le
              rouissage est la macération que l'on fait subir aux plantes
              textiles telles que le lin, le chanvre, etc., pour faciliter la
              séparation de l'écorce filamenteuse d'avec la tige. On fait rouir
              le chanvre ou le lin dans un routoir. Le terme rouir vient du
              francique rotjan, qui signifie pourrir.
              <br />
              <br />
              Le routoir pouvait être aussi un trou creusé au bord d'une mare,
              un étang, un petit cours d'eau. Les eaux qui le formaient étaient
              stagnantes ou courantes. Avec des eaux stagnantes, on obtenait un
              résultat plus rapide mais la filasse était de moins belle qualité
              et surtout moins résistante. Dans les eaux courantes, le rouissage
              était plus lent mais l'on obtenait des fibres presque blanches et
              très solides.
            </p>
          </section>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Le chanvre à Crolles
            </h2>

            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              La culture du chanvre dans le Grésivaudan remonte au Moyen Age et
              perdure jusqu’au début du 20ème siècle. Le chanvre, plante
              annuelle et fibreuse est l'une des cultures les plus anciennes et
              les plus riches du Grésivaudan. Cette plante de la famille des
              cannabinacées était utilisée pour la confection des cordages, du
              tissu et des toiles pour les navires.
              <br />
              <br />
              Semé au printemps et récolté à l'automne, le chanvre est mis en
              bottes et trempe pendant une dizaine de jours dans les routoirs,
              classés établissements insalubres début XIXème à cause des
              nuisances (pollution des cours d'eau, odeur nauséabonde…). Cette
              étape de rouissage facilite la séparation de l'écorce et de la
              tige filamenteuse. L'action suivante, le teillage, permet
              d'extraire la fibre textile, la filasse, du bois de la tige.
              Peignée, la fibre, de plus en plus mince, devient un fil.
              <br />
              <br />
              La culture du chanvre décline dans la seconde moitié du XIXème
              siècle, ne résistant pas à la concurrence étrangère ainsi qu'à
              l'avènement des fibres synthétiques et d'autres cultures comme
              celle du coton.
              <br />
              <br />
              En 1848, Crolles compte 100 hectares plantés en chanvre et 6
              tisserands (métier liés au fils). Mais face à la crise en 1882, il
              ne reste à Crolles plus que 2 hectares de chanvre cultivé et aucun
              tisserand.
            </p>
          </section>

          <div>
            <ComponentRoutoir />
          </div>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              En savoir +
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              <a
                href="http://www.persee.fr/doc/rga_0035-1121_1937_num_25_2_4076"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                L'agriculture du Grésivaudan [article]
              </a>
            </p>
          </section>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
