import React from "react";
import NewMovieForm from "../../components/NewMovieForm/NewMovieForm";
import { createMovie } from "../../services/movies-service";
import { useNavigate } from "react-router-dom";

const CreateMoviePage = () => {
  const navigator = useNavigate();
  const sumbitFunc = (data) => {
    console.log(data);
    createMovie(data)
      .then((movie) => {
        navigator("/movies");
      })
      .catch((e) => console.warn(e));
  };
  return (
    <main>
      <h1>Create A Movie</h1>
      <NewMovieForm submitFunc={sumbitFunc} />
    </main>
  );
};

export default CreateMoviePage;
