import React from 'react';
import { Link } from 'react-router-dom';

export const MovieItem = ({ movie }) => {
  return (
    <div>
      <li key={movie.id} className='movie-list__item'>
        <Link to={`/details/${movie.id}`} className='movie-list__link'>
          {movie.title}
        </Link>
      </li>
    </div>
  );
};
