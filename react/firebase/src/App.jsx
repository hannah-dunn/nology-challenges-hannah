import { useEffect } from "react";
import { testDatabase } from "./services/test-database";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MoviesContextProvider from "./context/MoviesContextProvider";
import MoviePage from "./pages/MoviePage/MoviePage";
import NavBar from "./components/NavBar/NavBar";
import CreateMoviePage from "./pages/CreateMoviePage/CreateMoviePage";

function App() {
  useEffect(() => {
    testDatabase();
  }, []);
  return (
    <>
      <MoviesContextProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/movies/new" element={<CreateMoviePage />} />
          </Routes>
        </BrowserRouter>
      </MoviesContextProvider>
    </>
  );
}

export default App;
