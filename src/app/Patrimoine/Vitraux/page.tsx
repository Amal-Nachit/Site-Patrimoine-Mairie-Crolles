"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ComponentVitraux } from "@/app/components/Carousels/Carousel-Vitraux";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">
              Anciens vitraux de l'église Saint-Pierre, Sain-Paul
            </h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a href="" className="hover:underline" target="_blank">
                    Crolles
                  </a>
                </p>
              </div>
              <div className="flex flex-col mr-20">
                <h3 className="text-lg font-semibold mb-1 mx-8">
                  Accessible au public :
                </h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faXmark} className="mr-2" />
                  Non
                  <br />
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Contemporaine</p>
              </div>
            </div>
          </section>

          <div className="flex justify-center items-center my-10">
            <div className="lg:w-1/2 sm:w-1/2 md:w-2/3">
              <img
                src="/images/Vitraux/1.jpg"
                alt="Vitraux"
                className={`lg:w-2/3 lg:mx-auto object-contain rounded-lg`}
              />
            </div>
          </div>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Emmanuel Pion, étudiant en histoire de l’art, a réalisé en 2018
              l’analyse iconographique des anciens vitraux de l’église de
              Crolles. Ceux-ci étaient situés au 2ème niveau d’élévation de
              l’église : celui des tribunes.
              <br /> <br />
              Ces vitraux ont été créés en 1948 par Paul Montfollet. « Ces
              vitraux éclairent la relation à la foi chrétienne du clergé et des
              fidèles de cette période. Ainsi, le programme narratif qu’ils
              portent, au-delà de l’illustration des enseignements dictés par le
              texte évangélique, est marqué de façon plus ou moins explicite par
              les préoccupations de la société française durant cette période
              d’après-guerre » (Emmanuel Pion).
              <br /> <br />
              Ils sont au nombre de 16 et illustrent les Béatitudes (Evangile de
              Saint-Mathieu, chapitre 5) :
            </p>
            <div className="border border-black p-2 sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              <p>
                Alors qu’il parcourt la Galilée, Jésus-Christ enseigne, guérit
                et proclame la bonne parole. Suivi par une foule de plus en plus
                nombreuse, il s’assied en haut d’une montagne et transmets une
                suite d’enseignements dont le premier s’intitule « Le vrai
                bonheur ». Ce sont les Béatitudes
              </p>
            </div>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Chacune des béatitudes se décline en deux images : l’action
              exemplaire d’un saint et ses conséquences pour le fidèle. La
              deuxième image est circonstanciée.
            </p>
            
          </section>
          <div className="flex justify-center items-center my-10">
            <ComponentVitraux />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
