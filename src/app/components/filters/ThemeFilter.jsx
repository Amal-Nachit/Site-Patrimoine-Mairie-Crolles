import React, { useState } from "react";
import DataPatrimoine from "../data/DataPatrimoine";

const ThemeFilter = ({ themeItems, filterTheme, setItems, selectedThemes }) => {
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterClick = (filterValue) => {
    // Vérifie si le filtre est déjà actif
    const isCurrentlyActive = activeFilters.includes(filterValue);
    // Ajoute ou supprime le filtre de la liste des filtres actifs
    const updatedFilters = isCurrentlyActive
      ? activeFilters.filter((filter) => filter !== filterValue)
      : [...activeFilters, filterValue];
    // Met à jour l'état des filtres actifs
    setActiveFilters(updatedFilters);
    // Applique le filtre
    filterTheme(filterValue);
  };

  return (
    <div className="flex flex-wrap justify-start items-center mt-20">
      <div className="w-full md:w-1/2">
        {themeItems.map((val) => (
          <button
            key={val}
            className={`${
              activeFilters.includes(val) ? "bg-blue-500" : "bg-gray-500"
            } hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded-md mr-2`}
            onClick={() => handleFilterClick(val)}
          >
            {val}
          </button>
        ))}
      </div>
      <div className="w-full md:w-1/2">
        <button
          className="bg-gray-500 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded-md"
          onClick={() => {
            setItems(DataPatrimoine);
            setActiveFilters([]);
          }}
        >
          Tout
        </button>
      </div>
    </div>
  );
};

export default ThemeFilter;
