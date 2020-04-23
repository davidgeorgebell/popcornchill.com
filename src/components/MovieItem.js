import React from 'react';
import { Link } from 'react-router-dom';

const imageUrl = 'https://image.tmdb.org/t/p/w200/';

export const MovieItem = ({ movie }) => {
  return (
    <div className='movie-list__item-wrapper'>
      <li key={movie.id} className='movie-list__item'>
        <Link to={`/details/${movie.id}`} className='movie-list__link'>
          <img
            src={`${imageUrl}${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
          <h2 className='movie-list__title'>{movie.title}</h2>
        </Link>
      </li>
    </div>
  );
};
