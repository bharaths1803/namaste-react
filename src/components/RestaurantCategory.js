import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, setShowIdx, isVisible }) => {
  const handleClick = () => {
    setShowIdx();
  };

  return (
    <div>
      <div className="w-1/2 mx-auto my-4 p-4 bg-gray-50 rounded-lg shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} - ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {isVisible && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
