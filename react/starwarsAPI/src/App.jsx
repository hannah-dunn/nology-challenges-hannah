import { useState } from "react";
import "./App.css";
import RandomStarWars from "./components/RandomStarWars/RandomStarWars";
import SearchBar from "./components/SearchBar/SearchBar";



function App() {

  const [searchTerm, setSearchTerm] = useState(null);

  const handleSubmit = (value) => {
    console.log('Form submitted');
    console.log('value', value);
    setSearchTerm(value);
  };

  return (
    <>
      <RandomStarWars />
      <SearchBar handleSubmit={handleSubmit} />
      
    </>
  );
}

export default App;
