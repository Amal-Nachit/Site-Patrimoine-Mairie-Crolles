import React, { useState } from "react";
import DataPatrimoine from "../data/DataPatrimoine";
const EpoqueFilter = ({ epoqueItems, filterEpoque, setItems}) => {
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
    filterEpoque(filterValue);
  };
  return (
    <div className="flex flex-col items-center mt-20">
      {epoqueItems.map((val) => (
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
  );
};

export default EpoqueFilter;
