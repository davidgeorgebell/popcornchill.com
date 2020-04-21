import React from 'react';
import { Link } from 'react-router-dom';

export const MovieItem = ({ movie }) => {
  return (
    <div>
      <li key={movie.id}>
        <Link to={`/details/${movie.id}`}>{movie.title}</Link>
      </li>
    </div>
  );
};
