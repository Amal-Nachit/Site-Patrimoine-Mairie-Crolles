import React, { useState } from "react";
import "./../../globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const Card = ({ items }) => {
  const [showAll, setShowAll] = useState(false);

  if (!items) {
    return null;
  }

  const displayedItems = showAll ? items : items.slice(0, 15);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-10 mx-10">
        {displayedItems.map((val) => (
          <div
            key={val.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl"
          >
            <a href={val.url}>
              <img
                src={val.image}
                alt={val.url}
                className="w-full h-48 object-cover cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </a>
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold mb-2 text-center">
                {val.name}
              </h2>
            </div>
            <div className="px-4 py-2 text-center border-t border-gray-200">
              <a
                href={val.url}
                className="block text-blue-500 hover:text-blue-800 hover:underline text-sm font-semibold"
              >
                Voir plus
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 mb-8 text-center">
        {!showAll && items.length > 15 && (
          <button
            className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => setShowAll(true)}
          >
            <FontAwesomeIcon icon={faAnglesDown} className="text-sm" />{" "}
            Afficher tout
          </button>
        )}
      </div>
    </>
  );
};

export default Card;

