"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCheck } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Registres paroissiaux</h1>
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
                    Mairie de Crolles
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
                    (Consultation possible sur RDV)
                  </p>
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Moderne</p>
              </div>
            </div>
          </section>

          <div className="flex flex-col items-center justify-center my-10">
            <img
              src="/images/Registres/1.jpg"
              alt="La Registres"
              className={`w-[30%] sm:w-[60%] lg:w-1/4 object-contain rounded-lg`}
            />
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 mb-8">
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Le service documentation-archives-patrimoine de la commune détient
              la collection complète des registres paroissiaux de 1596 à 1792
              et, dans la continuité les registres état civil de 1792 à nos
              jours. En effet, les locaux des archives sont protégés contre les
              risques d’incendie et le taux d’hygrométrie est régulièrement
              contrôlé.
              <br />
              <br />
              Cela fait donc 410 ans que repose précautionneusement, aux
              archives communales le plus ancien registre paroissial de Crolles.
              Ce registre est rédigé à la plume en ancien français.
            </p>
          </section>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Un peu d’histoire
            </h2>

            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              En France, l’autorité religieuse a très tôt souhaité répertorier
              les individus ayant reçu le baptême ou ayant été enterrés dans la
              religion. Le plus vieux registre conservé est celui de Givry, en
              Saône-et-Loire, puisqu’il remonte à 1303.
              <br />
              <br />
              L’acte de naissance de l’état civil proprement dit (car les
              registres paroissiaux ne concernaient que les catholiques) date du
              20 septembre 1792. Depuis cette date, les actes de naissance,
              mariage et décès sont dressés par les municipalités. Ces documents
              officiels constituent une source essentielle pour les recherches
              généalogiques.
            </p>
          </section>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 mb-8 flex justify-center items-center">
            <img
              src="/images/Registres/2.jpg"
              alt="Registres"
              className={`w-[45%] sm:w-[60%] lg:w-2/5 object-contain rounded-lg mr-4`}
            />
            <img
              src="/images/Registres/3.jpg"
              alt="Registres"
              className={`w-[45%] sm:w-[60%] lg:w-2/5 object-contain rounded-lg ml-4`}
            />
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
