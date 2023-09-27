import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./MovieList.module.scss";

const MovieList = ({ movies }) => {
  return (
    <section>
      <h3>You have watch {movies.length} movies</h3>
      <div className={styles.container}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {/* {
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      } */}
    </section>
  );
};

export default MovieList;
