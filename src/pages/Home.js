// src/pages/Home.js
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";
import AddMovieForm from "../components/AddMovieForm";
import Inception from "../assets/inception.jpg";
import Interstellar from "../assets/Interstellar.jpg";

const Home = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "Un voleur spécialisé dans l'extraction des rêves...",
      posterURL: Inception,
      rating: 4.8,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Un voleur spécialisé dans l'extraction des rêves...",
      posterURL: Interstellar,
      rating: 3,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    }
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  return (
    <Container style={{ maxWidth: "900px" }}>
      <h1 className="text-center my-4 impact-title">Bienvenue sur  <span>Cinema App</span></h1>
      <p className="text-center impact-subtitle">Découvrez et ajoutez vos films préférés</p>
      <Filter movies={movies} setFilteredMovies={setFilteredMovies} />
      <AddMovieForm setMovies={setMovies} movies={movies} />
      <MovieList movies={filteredMovies} />
    </Container>
  );
};

export default Home;