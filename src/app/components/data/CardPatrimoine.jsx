import React from "react";
import "./../../globals.css";

const Card = ({ items }) => {
  if (!items) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-16 mx-4">
      {items.map((val) => (
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
  );
};

export default Card;

