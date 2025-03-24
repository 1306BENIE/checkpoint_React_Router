import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const movies = [
  {
    id: 1,
    title: "Inception",
    description: "Un voleur spécialisé dans l'extraction des rêves...",
    posterURL: "/images/inception.jpg",
    rating: 4.8,
    trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  // Ajouter d'autres films
];

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Film non trouvé</h2>;

  return (
    <div className="container text-center mt-4">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Button onClick={() => navigate("/")} variant="primary" className="mt-3">
        Retour à l'accueil
      </Button>
    </div>
  );
};

export default MovieDetails;