// src/components/AddMovieForm.js
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/AddMovieForm.css";

const AddMovieForm = ({ setMovies, movies }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailerURL: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  return (
    <Form onSubmit={handleSubmit} className="m-4">
      <Form.Group>
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" name="title" onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name="description" onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>URL de l'affiche</Form.Label>
        <Form.Control type="text" name="posterURL" onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Note</Form.Label>
        <Form.Control type="number" name="rating" onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>URL de la bande-annonce</Form.Label>
        <Form.Control type="text" name="trailerURL" onChange={handleChange} required />
      </Form.Group>
      <Button type="submit" className="mt-3 gradient-button">Ajouter</Button>
    </Form>
  );
};

export default AddMovieForm;