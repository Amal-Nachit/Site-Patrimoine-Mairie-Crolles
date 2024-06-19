import React, { useState, useEffect } from "react";
import DataPatrimoine from "../data/DataPatrimoine";
import Card from "../data/CardPatrimoine";

const CombinedFilter = () => {
  const [items, setItems] = useState(DataPatrimoine);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [selectedEpoques, setSelectedEpoques] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});

  const accessItems = [
    ...Array.from(new Set(DataPatrimoine.map((val) => val.accessibilite))),
  ];

  const filterAccess = (accessItem) => {
    const newSelectedAccess = selectedThemes.includes(accessItem)
      ? selectedThemes.filter((theme) => theme !== accessItem)
      : [...selectedThemes, accessItem];
    const newItems = DataPatrimoine.filter((newval) =>
      Array.isArray(newval.accessibilite)
        ? newval.accessibilite.some((theme) =>
            newSelectedAccess.includes(theme)
          )
        : newSelectedAccess.includes(newval.accessibilite)
    );
    setItems(newItems);
    setSelectedThemes(newSelectedAccess);
  };

  const themeItems = Array.from(
    new Set(
      DataPatrimoine.flatMap((item) =>
        Array.isArray(item.theme) ? item.theme : [item.theme]
      )
    )
  );

  const filterTheme = (themeItem) => {
    const newSelectedThemes = selectedThemes.includes(themeItem)
      ? selectedThemes.filter((theme) => theme !== themeItem)
      : [...selectedThemes, themeItem];
    const newItems = DataPatrimoine.filter((newval) =>
      Array.isArray(newval.theme)
        ? newval.theme.some((theme) => newSelectedThemes.includes(theme))
        : newSelectedThemes.includes(newval.theme)
    );
    setItems(newItems);
    setSelectedThemes(newSelectedThemes);
  };

  const filterEpoque = (epoqueItem) => {
    const newSelectedEpoques = selectedEpoques.includes(epoqueItem)
      ? selectedEpoques.filter((epoque) => epoque !== epoqueItem)
      : [...selectedEpoques, epoqueItem];
    const newItems = DataPatrimoine.filter((newval) =>
      Array.isArray(newval.epoque)
        ? newval.epoque.some((epoque) => newSelectedEpoques.includes(epoque))
        : newSelectedEpoques.includes(newval.epoque)
    );
    setItems(newItems);
    setSelectedEpoques(newSelectedEpoques);
  };

  const epoqueItems = Array.from(
    new Set(
      DataPatrimoine.flatMap((item) =>
        Array.isArray(item.epoque) ? item.epoque : [item.epoque]
      )
    )
  );

  const handleFilterClick = (filterType, filterValue) => {
    // Si le filtre n'est pas encore actif, on crée une nouvelle liste de filtres
    if (!activeFilters[filterType]) {
      activeFilters[filterType] = [];
    }

    // On vérifie si le filtre est déjà actif
    const isCurrentlyActive = activeFilters[filterType].includes(filterValue);

    // On met à jour la liste des filtres actifs
    const updatedFilters = isCurrentlyActive
      ? activeFilters[filterType].filter((filter) => filter !== filterValue)
      : [...activeFilters[filterType], filterValue];

    // On met à jour les filtres actifs
    setActiveFilters({ ...activeFilters, [filterType]: updatedFilters });

    // On appelle la fonction de filtrage correspondante
    switch (filterType) {
      case "access":
        filterAccess(filterValue);
        break;
      case "epoque":
        filterEpoque(filterValue);
        break;
      case "theme":
        filterTheme(filterValue);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Si aucun filtre n'est sélectionné, on affiche la liste complète
    if (Object.values(activeFilters).flat().length === 0) {
      setItems(DataPatrimoine);
    }
  }, [activeFilters]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {/* Liste des cartes */}
      <div className="md:col-span-4">
        <Card items={items} />
      </div>

      {/* Filtres */}
      <div className="bg-gray-100 p-4 md:col-span-1">
        <h3 className="text-lg font-semibold mb-4">Filtre d'accès</h3>
        {accessItems.map((val) => (
          <button
            key={val}
            className={`${
              activeFilters.access?.includes(val)
                ? "border border-blue-500 bg-blue-100 text-blue-800"
                : "border border-gray-300 bg-white text-gray-700"
            } font-normal py-2 px-4 rounded-md mr-2 mb-2 transition duration-150 ease-in-out hover:border-blue-500 hover:bg-blue-50`}
            onClick={(event) => handleFilterClick("access", val, event)}
          >
            {val}
          </button>
        ))}

        <h3 className="text-lg font-semibold mt-8 mb-4">Filtre d'époque</h3>
        {epoqueItems.map((val) => (
          <button
            key={val}
            className={`${
              activeFilters.epoque?.includes(val)
                ? "border border-blue-500 bg-blue-100 text-blue-800"
                : "border border-gray-300 bg-white text-gray-700"
            } font-normal py-2 px-4 rounded-md mr-2 mb-2 transition duration-150 ease-in-out hover:border-blue-500 hover:bg-blue-50`}
            onClick={(event) => handleFilterClick("epoque", val, event)}
          >
            {val}
          </button>
        ))}

        <h3 className="text-lg font-semibold mt-8 mb-4">Filtre de thème</h3>
        {themeItems.map((val) => (
          <button
            key={val}
            className={`${
              activeFilters.theme?.includes(val)
                ? "border border-blue-500 bg-blue-100 text-blue-800"
                : "border border-gray-300 bg-white text-gray-700"
            } font-normal py-2 px-4 rounded-md mr-2 mb-2 transition duration-150 ease-in-out hover:border-blue-500 hover:bg-blue-50`}
            onClick={(event) => handleFilterClick("theme", val, event)}
          >
            {val}
          </button>
        ))}

        <button
          className="mt-8 border border-gray-300 bg-white text-gray-700 font-normal py-2 px-4 rounded-md w-full transition duration-150 ease-in-out hover:border-blue-500 hover:bg-blue-50"
          onClick={() => {
            setItems(DataPatrimoine);
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
