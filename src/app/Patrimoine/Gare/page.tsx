"use client";
import React from "react";
import Header from "../../includes/Header";
import Footer from "@/app/includes/Footer";
import { ComponentGare } from "@/app/components/Carousels/Carousel-Gare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className="App bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 text-zinc-800">
          <section className="text-center mt-8">
            <h1 className="text-4xl font-bold pt-6">Gare du tramway</h1>
            <div className="flex justify-center">
              <hr className="mt-2 mb-8 border-zinc-300 w-1/4" />
            </div>
            <div className="flex justify-center space-x-4 mb-4 mx-auto md:mx-16">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Localisation :</h3>
                <p className="text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  <a
                    href="https://maps.app.goo.gl/oWb2dzzFevzYfwFF8"
                    className="hover:underline"
                    target="_blank"
                  >
                    192, Avenue Joliot-Curie
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
                  <p className="text-sm italic">(Actuelle brasserie)</p>
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">Époque :</h3>
                <p className="text-sm">Contemporaine</p>
              </div>
            </div>
          </section>

          <div className="my-10">
            <div className="">
              <figure className="flex flex-col items-center justify-center">
                <img
                  src="/images/Gare/1.jpg"
                  alt="La Gare"
                  className={`w-[80%] sm:w-[90%] lg:w-2/5 object-contain rounded-lg`}
                />
                <figcaption className="text-center text-zinc-500 text-sm italic mt-2">
                  Photo : Carte postale de la gare de Crolles.
                </figcaption>
              </figure>
            </div>
          </div>

          <section className="sm:mx-8 md:mx-4 lg:mx-32 mb-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Le tramway à Crolles
            </h2>
            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              La seconde moitié du XIXe siècle a connu de nombreuses révolutions
              techniques dont celle des transports. Ainsi le chemin de fer et le
              tramway, rapides et économiques, ont permis une multiplication des
              échanges et une ouverture des campagnes vers les villes.
              <br />
              <br />
              De 1898 à 1947, une ligne de tramway desservait la rive droite de
              la vallée du Grésivaudan, de Grenoble à Chapareillan.
            </p>
          </section>
          <section className="sm:mx-8 md:mx-4 lg:mx-32 my-8">
            <h2 className="text-2xl font-bold sm:mx-10 md:mx-4 lg:mx-32 mb-4 underline">
              Un peu d'histoire
            </h2>

            <p className="sm:mx-10 md:mx-4 lg:mx-32 mb-4">
              Le tramway, très utilisé à Crolles, a joué un rôle économique
              important. Il permettait entre autres le transport des
              marchandises, notamment des colis de ganterie, mais aussi des
              produits agricoles et de l’industrie.Cependant, face à la
              concurrence du réseau routier, le tramway est progressivement
              abandonné et est définitivement fermé en 1947. Les anciens
              bâtiments qui accueillaient les voyageurs ou servaient pour
              entreposer les marchandises sont revendus aux communes et souvent
              réhabilités.
              <br />
              <br />
              La gare de Crolles construite sur un modèle type des gares de
              l’époque comprenait un bâtiment central imposant avec un mur
              pignon orienté vers la voie et deux ailes plus petites sur les
              côtés. Le bâtiment central accueillait les voyageurs, et l’étage
              était réservé au logement du chef de gare.
              <br />
              <br />
              L’ancienne gare du tramway a accueilli la poste en 1993. C’est
              aujourd’hui une brasserie. L’ancien dépôt de wagons est devenu la
              première salle des fêtes de Crolles en 1930. Aujourd’hui c’est un
              boulodrome.
            </p>
          </section>
          <div>
            <ComponentGare />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
