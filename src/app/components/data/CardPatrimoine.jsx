import React from 'react';
import "./../../globals.css";
const Card = ({ item }) => {
  return (
    <div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-28 mx-16">
      {item.map((val) => (
        <div
          key={val.id}
          className="bg-white rounded-lg shadow-md overflow-hidden m-2 hover:shadow-2xl"
        >
          <a href={val.url}>
            <img
              src={val.image}
              alt={val.url}
              className="w-full h-64 object-cover cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </a>
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold mb-2 text-center">
              {val.name}
            </h2>
            <div className="text-gray-600 text-center">
              {val.description}
            </div>
          </div>
          <div className="px-6 py-4 text-center border-t border-gray-200">
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
    </div>
  );
};

export default Card;


