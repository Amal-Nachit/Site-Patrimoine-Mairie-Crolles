"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAllActualites } from "../Services/actualites";
import { TailSpin } from "react-loader-spinner";
import { ActualiteProps } from "../../app/Utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons/faAnglesRight";

const Actualites = () => {
  const [actualitesList, setActualitesList] = useState<ActualiteProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const { push } = useRouter();

  const fetchData = async () => {
    try {
      const res = await getAllActualites();
      const sortedActualitesList = res.data.sort(
        (a: { date: string | number | Date }, b: { date: string | number | Date }) =>
          new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1
      );
      setActualitesList(sortedActualitesList);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching actualites:", error);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData(); 
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <main className="flex flex-col items-center justify-center my-12">
      {actualitesList.length > 0 && (
        <>
          <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl xl:text-4xl font-bold text-gray-800 my-8 pb-4">
            Nos actualités autour du patrimoine
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 max-w-7xl mx-auto">
            {isLoading ? (
              <div className="flex justify-center items-center w-full">
                <TailSpin color="#06b6d4" height={80} width={80} />
              </div>
            ) : (
              <>
                {actualitesList
                  .slice(0, showMore ? actualitesList.length : 3)
                  .map((patrimoine_actualite) => (
                    <div
                      key={patrimoine_actualite.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl flex flex-col"
                    >
                      {patrimoine_actualite.image && (
                        <img
                          src={patrimoine_actualite.image}
                          alt={patrimoine_actualite.titre}
                          className="w-full h-48 object-cover cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
                          onClick={() =>
                            push(
                              `/actualites/details/${patrimoine_actualite.id}`
                            )
                          }
                        />
                      )}
                      <div className="py-6 px-4 flex-grow">
                        <h5
                          className="mb-6 mt-4 text-2xl font-semibold cursor-pointer text-sky-600 hover:underline"
                          onClick={() =>
                            push(
                              `/actualites/details/${patrimoine_actualite.id}`
                            )
                          }
                        >
                          {patrimoine_actualite.titre}
                        </h5>
                        <p className="text-gray-700 mb-4">
                          {patrimoine_actualite.contenu.substring(0, 150) +
                            "..."}
                        </p>
                        <button
                          className="pt-4 text-lg text-blue-600 hover:underline focus:outline-none"
                          onClick={() =>
                            push(
                              `/actualites/details/${patrimoine_actualite.id}`
                            )
                          }
                        >
                          Lire la suite
                          <FontAwesomeIcon
                            icon={faAnglesRight}
                            className="pl-1 text-xs"
                          />
                        </button>
                      </div>
                      <div className="py-2 px-2 bg-blue-100">
                        <span className="text-gray-600 text-sm">
                          {new Date(Date.parse(patrimoine_actualite.date)).toLocaleDateString(
                            "fr-FR",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
          {actualitesList.length > 3 && (
            <button
              onClick={handleShowMore}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {showMore ? "Voir moins" : "Voir plus"}
            </button>
          )}
        </>
      )}
    </main>
  );
};

export default Actualites;
