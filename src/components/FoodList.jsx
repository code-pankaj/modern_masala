import React from "react";
import FoodItems from "./FoodItems";
import { FoodItems_secondary } from "./FoodItems";

const FoodList = ({ searchTerm }) => {
  const filteredFoodItems = FoodItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFoodItemsSecondary = FoodItems_secondary.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-10 FoodList">
      <div className="flex items-center justify-center p-5 insideFoodList">
        {filteredFoodItems.map((item) => (
          <div key={item.name} className="border-3 m-2 rounded-2xl">
            <img src={item.image} alt={item.name} width="200" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center p-5 insideFoodList">
        {filteredFoodItemsSecondary.map((item) => (
          <div key={item.name} className="border-3 m-2 rounded-2xl">
            <img src={item.image} alt={item.name} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;