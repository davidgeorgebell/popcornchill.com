import React from 'react';
import { Link } from 'react-router-dom';

const imageUrl = 'https://image.tmdb.org/t/p/w200/';

export const MovieItem = ({ movie }) => {
  return (
    <div>
      <li key={movie.id} className='movie-list__item'>
        <Link to={`/details/${movie.id}`} className='movie-list__link'>
          <h2>{movie.title}</h2>
          <img
            src={`${imageUrl}${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        </Link>
      </li>
    </div>
  );
};
