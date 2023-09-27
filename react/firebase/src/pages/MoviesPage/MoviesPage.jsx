import React, { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContextProvider";
import MovieList from "../../containers/MovieList/MovieList";

const MoviesPage = () => {
  const { movies } = useContext(MoviesContext);

  // dont need this bc of moviesContext use effect
  // useEffect(() => {
  //   refreshMovies();
  // }, []);

  return (
    <main>
      <h1>Movies</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default MoviesPage;
