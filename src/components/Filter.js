// src/components/Filter.js
import React from "react";
import { Form } from "react-bootstrap";

const Filter = ({ movies, setFilteredMovies }) => {
  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    setFilteredMovies(movies.filter(movie => movie.title.toLowerCase().includes(value)));
  };

  return (
    <Form className="m-4">
      <Form.Control type="text" placeholder="Rechercher un film..." onChange={handleFilter} />
    </Form>
  );
};

export default Filter;
