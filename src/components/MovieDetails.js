import React from 'react';
import { Link } from 'react-router-dom';

export const MovieDetails = ({
  imageUrl,
  poster_path,
  title,
  vote_average,
  runtime,
  release_date,
  genres,
  overview,
}) => {
  return (
    <>
      <div className='movie-details__top'>
        <h1>{title}</h1>
        <img src={`${imageUrl}${poster_path}`} alt={`${title} poster`} />
        <div className='votes'>
          <p>
            {vote_average}{' '}
            <span role='img' aria-label='star'>
              ⭐️
            </span>
          </p>
        </div>
        <time>
          <p>
            {runtime} mins{' '}
            <span role='img' aria-label='clock'>
              🕐
            </span>
          </p>
        </time>
      </div>
      <div className='movie-details__description'></div>
      <p>{release_date}</p>
      <ul>
        {genres &&
          genres.map(genre => (
            <li key={genre.name}>
              <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
            </li>
          ))}
      </ul>
      <p>{overview}</p>
    </>
  );
};
