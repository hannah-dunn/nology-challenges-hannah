import React from "react";
import { useState } from "react";
import { getCharacter } from "../../services/character-services";
import { useEffect } from "react";

const RandomStarWars = () => {
  const [StarWarsData, setStarWarsData] = useState(null);
  const refreshData = () => {
    getCharacter()
      .then((StarWarsData) => setStarWarsData(StarWarsData))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    console.log("Mounted StarWars data component");
    refreshData();
    return () => {
      console.log("Cleanup");
    };
  }, []);

  return (
    <div>
      <button onClick={refreshData}>Generate Star Wars Data</button>
      {StarWarsData && <p>{StarWarsData.character}</p>}
    </div>
  );
};

export default RandomStarWars;
