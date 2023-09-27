import styles from "./MovieCard.module.scss";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <article className={styles.card}>
      <h2>{movie.title}</h2>
      <img src={movie.imageLink} alt={movie.title} />
      <Link to={movie.id}>See More</Link>
    </article>
  );
};

export default MovieCard;
