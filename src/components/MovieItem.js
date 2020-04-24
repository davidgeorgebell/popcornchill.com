import React from 'react';
import { Link } from 'react-router-dom';

const imageUrl = 'https://image.tmdb.org/t/p/w200/';

export const MovieItem = ({ movie }) => {
  return (
    <div className='movie-list__item-wrapper'>
      <li key={movie.id} className='movie-list__item'>
        <Link to={`/details/${movie.id}`} className='movie-list__link'>
          {movie.poster_path ? (
            <img
              src={`${imageUrl}${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          ) : (
            <div className='no-image-holder'>No image available</div>
          )}
          <h2 className='movie-list__title'>{movie.title}</h2>
        </Link>
      </li>
    </div>
  );
};
