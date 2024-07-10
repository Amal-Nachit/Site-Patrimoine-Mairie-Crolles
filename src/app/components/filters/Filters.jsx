import React, { useState, useEffect } from "react";
import DataPatrimoine from "../data/DataPatrimoine";
import Card from "../data/CardPatrimoine";

const CombinedFilter = () => {
  const [items, setItems] = useState(DataPatrimoine);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [selectedEpoques, setSelectedEpoques] = useState([]);
  const [selectedAccess, setSelectedAccess] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});

  const accessItems = [
    ...Array.from(new Set(DataPatrimoine.map((val) => val.accessibilite))),
  ];

  const themeItems = Array.from(
    new Set(
      DataPatrimoine.flatMap((item) =>
        Array.isArray(item.theme) ? item.theme : [item.theme]
      )
    )
  );

  const epoqueItems = Array.from(
    new Set(
      DataPatrimoine.flatMap((item) =>
        Array.isArray(item.epoque) ? item.epoque : [item.epoque]
      )
    )
  );

  const applyFilters = () => {
    let filteredItems = DataPatrimoine;

    if (selectedAccess.length > 0) {
      filteredItems = filteredItems.filter((item) =>
        selectedAccess.includes(item.accessibilite)
      );
    }

    if (selectedEpoques.length > 0) {
      filteredItems = filteredItems.filter((item) =>
        Array.isArray(item.epoque)
          ? item.epoque.some((epoque) => selectedEpoques.includes(epoque))
          : selectedEpoques.includes(item.epoque)
      );
    }

    if (selectedThemes.length > 0) {
      filteredItems = filteredItems.filter((item) =>
        Array.isArray(item.theme)
          ? item.theme.some((theme) => selectedThemes.includes(theme))
          : selectedThemes.includes(item.theme)
      );
    }

    setItems(filteredItems);
  };

  const handleFilterClick = (filterType, filterValue) => {
    let updatedFilters;
    switch (filterType) {
      case "access":
        updatedFilters = selectedAccess.includes(filterValue)
          ? selectedAccess.filter((access) => access !== filterValue)
          : [...selectedAccess, filterValue];
        setSelectedAccess(updatedFilters);
        break;
      case "epoque":
        updatedFilters = selectedEpoques.includes(filterValue)
          ? selectedEpoques.filter((epoque) => epoque !== filterValue)
          : [...selectedEpoques, filterValue];
        setSelectedEpoques(updatedFilters);
        break;
      case "theme":
        updatedFilters = selectedThemes.includes(filterValue)
          ? selectedThemes.filter((theme) => theme !== filterValue)
          : [...selectedThemes, filterValue];
        setSelectedThemes(updatedFilters);
        break;
      default:
        break;
    }

    setActiveFilters({
      ...activeFilters,
      [filterType]: updatedFilters,
    });
  };

  useEffect(() => {
    applyFilters();
  }, [selectedAccess, selectedEpoques, selectedThemes]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* Liste des cartes */}
      <div className="md:col-span-4">
        <Card items={items} />
      </div>

      {/* Filtres */}
      <div className="bg-gray-100 p-4 md:col-span-1 pt-16">
        <h3 className="text-lg font-semibold mb-4">Accessible au public</h3>
        {accessItems.map((val) => (
          <button
            key={val}
            className={`${
              selectedAccess.includes(val)
                ? "border border-blue-500 bg-blue-100 text-blue-800"
                : "border border-gray-300 bg-white text-gray-700"
            } font-normal py-2 px-4 rounded-md mr-2 mb-2 transition duration-150 ease-in-out hover:border-blue-500 hover:bg-blue-50`}
            onClick={() => handleFilterClick("access", val)}
          >
            {val}
          </button>
        ))}

        <h3 className="text-lg font-semibold mt-8 mb-4">Époque</h3>
        {epoqueItems.map((val) => (
          <button
            key={val}
            className={`${
              selectedEpoques.includes(val)
                ? "border border-blue-500 bg-blue-100 text-blue-800"
                : "border border-gray-300 bg-white text-gray-700"
            } font-normal py-2 px-4 rounded-md mr-2 mb-2 transition duration-150 ease-in-out hover:border-blue-500 hover:bg-blue-50`}
            onClick={() => handleFilterClick("epoque", val)}
          >
            {val}
          </button>
        ))}

        <h3 className="text-lg font-semibold mt-8 mb-4">Thème</h3>
        {themeItems.map((val) => (
          <button
            key={val}
            className={`${
              selectedThemes.includes(val)
                ? "border border-blue-500 bg-blue-100 text-blue-800"
                : "border border-gray-300 bg-white text-gray-700"
            } font-normal py-2 px-4 rounded-md mr-2 mb-2 transition duration-150 ease-in-out hover:border-blue-500 hover:bg-blue-50`}
            onClick={() => handleFilterClick("theme", val)}
          >
            {val}
          </button>
        ))}

        <button
          className="mt-16 border border-gray-300 bg-white text-gray-700 font-normal py-2 px-4 rounded-md w-full transition duration-150 ease-in-out hover:border-blue-500 hover:bg-blue-50"
          onClick={() => {
            setItems(DataPatrimoine);
            setSelectedAccess([]);
            setSelectedEpoques([]);
            setSelectedThemes([]);
            setActiveFilters({});
          }}
        >
          Réinitialiser tous les filtres
        </button>
      </div>
    </div>
  );
};

export default CombinedFilter;
