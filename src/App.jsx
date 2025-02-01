import React, { useState } from "react";
import NavBar from "./components/NavBar";
import FoodList from "./components/FoodList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <hr />
      <FoodList searchTerm={searchTerm} />
    </>
  );
};

export default App;