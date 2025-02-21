"use client";
import React from "react";
import Header from "../../../app/includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentMoulin } from "@/app/components/Carousels/Carousel-Moulin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCheck } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Moulin des Ayes</h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a
                    href="https://maps.app.goo.gl/QSVqWwDAoUeypBB16"
                    className="hover:underline"
                    target="_blank"
                  >
                    106, Chemin du meunier
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
                    (Moulin ouvert ponctuellement )
                  </p>
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Moyen-Âge / Contemporaine</p>
              </div>
            </div>
          </section>

          <div className="my-10">
            <figure className="flex flex-col items-center justify-center">
              <img
                src="/images/Moulin-Des-Ayes/1.jpg"
                alt="La Moulin"
                className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
              />
              <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                18-09-12 ballade contée, journée du patrimoine
              </figcaption>
            </figure>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 mb-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              La fondation
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Le moulin des Ayes appartenait à l’abbaye des Ayes, couvent de
              femmes fondé au XIIème siècle par Marguerite de Bourgogne. C'est
              un moulin à eau, alimenté par un béal, petit canal le reliant au
              ruisseau de Craponoz. En effet, celui-ci a longtemps offert sa
              force vive à de nombreux moulins. Ainsi en 1820, on répertorie
              dans les matrices cadastrales : quatre tuileries, cinq moulins à
              grain, deux à deux roues (une pour le grain et une pour l’huile),
              un moulin spécialisé dans la fabrication du gruau, deux pressoirs
              à huile et quatre battoirs à chanvre.
            </p>
          </section>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Un peu d’histoire
            </h2>

            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Le moulin des Ayes subi au fil du temps de nombreuses
              modifications aussi bien dans son architecture (plan et élévation)
              que dans ses machineries. Il comprenait à l’origine deux paires de
              meules et un bluteau (tamis qui sépare la farine du son). Le
              bâtiment actuel qui s’élève sur deux niveaux conserve une
              installation complète pour moudre des céréales ainsi qu’une
              huilerie (noix et colza). Le matériel date pour la plupart du
              XIXème ou XXème siècle.
              <br />
              <br />
              Le moulin des Ayes dit aussi moulin Gabert du nom de son ancien
              propriétaire est resté en fonction jusqu’aux années 90. Ses
              productions étaient alors nombreuses et variées.
            </p>
          </section>
          <div className="lg:max-w-5xl md:max-w-2xl sm:max-w-1xl mx-auto sm:px-6 md:px-2 lg:px-6 py-8">
            <section className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-left text-black-600 underline mb-4">
                Les productions
              </h2>
              <p className="text-left text-black-600 leading-relaxed">
                A l’origine : farine brute à partir de grains de blé, seigle,
                méteil et farine passée au bluteau
                <br />
                <br />
                Début XIXe siècle : farines, battage du chanvre
                <br /> <br />
                Fin du XIXe siècle : farines, battage du chanvre et du blé,
                huile de noix
                <br />
                <br />
                XXe siècle : farines, blé grué, huile de noix, aliments pour le
                bétail, battage du blé, graines de trèfle, colza, farine de
                maïs, avoine, orge.
              </p>
            </section>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Le moulin devenant propriété de la commune en 2000, d’importants
              travaux de restauration ont été menés depuis :
              <br /> <br />
              <ul className="list-disc list-inside pl-6 pr-20">
                <li>
                  2004 : réfection de la toiture principale et démolition du
                  hangar qui menaçait de s’écrouler
                </li>
                <li>
                  2007 : réhabilitation de l’ancienne maison du meunier en
                  logements (en partenariat avec Pluralis)
                </li>
                <li>
                  2011 - 2012 : curage de la serve restauration des planchers et
                  rénovation des escaliers réfection de la toiture qui abrite la
                  roue à aube en 2012
                </li>
                <li>2016 : réfection du mur de façade.</li>
              </ul>
              <br />
              <br />
              Ce travail de valorisation intègre un partenariat avec
              l’association du patrimoine Les raisonneurs de pierre. Celle-ci
              œuvre depuis 2008 à la création et à l’entretien du jardin qui
              jouxte la serve et travaille actuellement à la restauration de la
              machinerie.
            </p>
          </section>

          <div className="lg:max-w-5xl md:max-w-2xl sm:max-w-1xl mx-auto sm:px-6 md:px-2 lg:px-6 py-8">
            <section className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-left text-black-600 underline mb-4">
                Anecdote
              </h2>
              <p className="text-left text-black-600 leading-relaxed">
                Le nom des Ayes viendrait du lieu, bordé de buissons et de
                ronces, nommé ayes en patois.
              </p>
            </section>
          </div>

          <div>
            <ComponentMoulin />
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              En savoir +
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              <a
                href="/documents-pdf/panneau exposition moulin.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Panneau d'exposition du Moulin des Ayes
              </a>
            </p>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              <a
                href="/documents-pdf/moulin_de_crolles.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                ABBAYE DES AYES moulins vieux et neuf des Ayes
              </a>
            </p>
            
            <br />
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4 italic">
              Retrouvez le témoignage de Maurice Lhorme (propos recueillis par
              Valérie Valenza, avril 2007)
            </p>
            <div className="sm:mx-10 md:mx-4 lg:mx-32 mb-4 relative bg-slate-100 p-4 rounded-lg">
              <audio controls className="w-full bg-white p-2 rounded-lg">
                <source
                  src="/audio/Entretien avec Maurice LHORME 02-04-07.wav"
                  type="audio/wav"
                />
              </audio>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
