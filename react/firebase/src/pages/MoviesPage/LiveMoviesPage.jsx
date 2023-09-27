import React, { useEffect } from "react";
import MovieList from "../../containers/MovieList/MovieList";

const LiveMoviesPage = () => {
  const [movies, setMovies] = state(null);

  useEffect(() => {
    const unsub = subscribeToMovies(setMovies);
    return () => unsub();
  }, []);
  return (
    <main>
      <h1>Movies</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  );
};

export default LiveMoviesPage;
