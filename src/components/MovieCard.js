// src/components/MovieCard.js
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
      <Card className="m-2 shadow-lg" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MovieCard;
