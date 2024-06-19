"use client";
import React, { useState } from "react";
import "./globals.css";
import Header from "../app/includes/Header";
import Footer from "./includes/Footer";
import DataPatrimoine from "./components/data/DataPatrimoine";
import { ComponentHome } from "./components/CarrouselHome";
import CombinedFilter from "./components/filters/Filters";

function App() {
  const [items, setItems] = useState(DataPatrimoine);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [selectedEpoques, setSelectedEpoques] = useState([]);
  const accessItems = [
    ...Array.from(new Set(DataPatrimoine.map((val) => val.accessibilite))),
  ];

  const filterAccess = (accessItem: string) => {
    const newItems = DataPatrimoine.filter(
      (newval) => newval.accessibilite === accessItem
    );
    setItems(newItems);
  };

  const themeItems = Array.from(
    new Set(
      DataPatrimoine.flatMap((item) =>
        Array.isArray(item.theme) ? item.theme : [item.theme]
      )
    )
  );
 const filterTheme = (themeItem: string) => {
   const newSelectedThemes =
     selectedThemes.includes(themeItem)
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

  const filterEpoque = (epoqueItem: string) => {
    const newSelectedEpoques =
      selectedEpoques.includes(epoqueItem)
        ? selectedEpoques.filter((epoque) => epoque !== epoqueItem)
        : [...selectedEpoques, epoqueItem];
    const newItems = DataPatrimoine.filter((newval) =>
      Array.isArray(newval.epoque)
        ? newval.epoque.some((epoque) => newSelectedEpoques.includes(epoque))
        : newSelectedEpoques.includes(newval.epoque)
    );
    setItems(newItems);
    // setSelectedEpoques(newSelectedEpoques);
  };
  const epoqueItems = Array.from(
    new Set(
      DataPatrimoine.flatMap((item) =>
        Array.isArray(item.epoque) ? item.epoque : [item.epoque]
      )
    )
  );

  return (
    <div className="bg-white">
      <Header />
      <div>
        <ComponentHome />
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-4"> */}
        {/* <div className="bg-gray-100 p-4 md:col-span-1">
          <h3 className="text-2xl font-semibold mt-8">
            Accessible au public :
          </h3>
          <AccessFilter
            accessItems={accessItems}
            filterAccess={filterAccess}
            setItems={setItems}
          />
          <h3 className="text-2xl font-semibold mt-8">Thèmes :</h3>
          <ThemeFilter
            {...{
              themeItems,
              filterTheme,
              setSelectedThemes,
              selectedThemes,
              setItems,
              selectedItems: items,
              newSelectedEpoques: selectedEpoques,
            }}
          />
          <h3 className="text-2xl font-semibold mt-8">Epoques :</h3>
          <EpoqueFilter
            filterEpoque={filterEpoque}
            epoqueItems={epoqueItems}
            setItems={setItems}
            selectedEpoques={selectedEpoques}
            newSelectedThemes={selectedThemes}
          />
          <Filters />
        </div> */}
          
        <div>
          <CombinedFilter items={items} />
        </div>
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;

