import React, { useState } from "react";
import RestaurantsList from "./restaurants";

function filterData(searchInput, restaurantName){
    return (
        restaurantName.filter((r) => r.name.includes(searchInput)) 
    )
}

const Search = () => {
  const [restaurantName, setRestaurantName] = useState(RestaurantsList);
  const [searchInput, setSearchInput] = useState();
  return (
    <div>
      <input
        placeholder="Search"
        id="search-input"
        type="text"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <button
        id="search-btn"
        onClick={() => {
          const data = filterData(searchInput, restaurantName);
          setRestaurantName(data)
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
