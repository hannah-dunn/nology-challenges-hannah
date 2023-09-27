import { createContext, useEffect, useState } from "react";
import { getAllMovies } from "../services/movies-service";

export const MoviesContext = createContext(null);

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const refreshMovies = () => {
    getAllMovies()
      .then((movies) => setMovies(movies))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    refreshMovies();
  }, []);

  const addToMovies

  return (
    <MoviesContext.Provider value={{ movies, refreshMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
