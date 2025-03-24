// src/components/MovieList.js
import React from "react";
import { Container} from "react-bootstrap";
import MovieCard from "./MovieCard";
import "../styles/MovieList.css"

const MovieList = ({ movies }) => {
  return (
    <Container>
      <div className="d-flex justify-content-center">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
          <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MovieList;
