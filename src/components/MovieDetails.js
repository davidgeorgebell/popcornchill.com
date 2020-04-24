import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GenreContext } from '../contexts/GenreContext';

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
  const { addGenreToState } = useContext(GenreContext);
  return (
    <>
      <div className='movie-details__top'>
        <h1>{title}</h1>
        <img src={`${imageUrl}${poster_path}`} alt={`${title} Poster`} />
        <div className='votes'>
          <p>
            <strong>
              <span role='img' aria-label='star' style={{ fontSize: '1.7rem' }}>
                ✰
              </span>{' '}
              {vote_average} / 10
            </strong>
          </p>
        </div>
        <time>
          <p>
            Runtime:{' '}
            <strong>
              {runtime} mins{' '}
              <span
                role='img'
                aria-label='clock'
                style={{ fontSize: '1.7rem' }}>
                ⌛︎
              </span>
            </strong>
          </p>
        </time>
      </div>
      <div className='movie-details__description'></div>
      <p>
        Released: <strong>{release_date}</strong>
      </p>
      <ul>
        {genres &&
          genres.map(genre => (
            <li key={genre.name}>
              <Link
                onClick={() => addGenreToState(genre.name)}
                className='genre-link'
                to={`/genre/${genre.id}`}
                aria-label={`link to other movies in ${genre.name}`}>
                {genre.name}
              </Link>
            </li>
          ))}
      </ul>
      <p>{overview}</p>
    </>
  );
};
