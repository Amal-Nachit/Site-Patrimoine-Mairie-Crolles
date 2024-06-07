import React, { useState } from "react";
import DataPatrimoine from "../data/DataPatrimoine";

const AccessFilter = ({ accessItems, filterAccess, setItems }) => {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (filterValue) => {
    filterAccess(filterValue);
    setActiveFilter(filterValue); 
  };

  return (
    <div className="flex justify-center mt-20">
      {accessItems.map((val) => (
        <button
          key={val}
          className={`${
            activeFilter === val ? "bg-blue-500" : "bg-gray-500"
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
          setActiveFilter(null);
        }}
      >
        Tout
      </button>
    </div>
  );
};

export default AccessFilter;
