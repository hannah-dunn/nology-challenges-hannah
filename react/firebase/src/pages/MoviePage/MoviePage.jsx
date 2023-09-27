import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../services/movies-service";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieById(id)
      .then((movie = setMovie(m)))
      .catch((error) => setError);
  }, [id]);

  return (
    <main>
      {movie && (
        <>
          <h1>{movie.title}</h1>
          <h2>Year: {movie.year}</h2>
          <h3>Director: {movie.director}</h3>
          <h4>{movie.genre}</h4>
          <img src={movie.imageLink} alt={movie.title} />
        </>
      )}
      {error && <p>Could not retrieve movie with Id: {id}</p>}
      // <h1>Individual Movie page</h1>
      // <h2>Id: {id}</h2>
    </main>
  );
};

export default MoviePage;
