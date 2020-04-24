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
  tagline,
}) => {
  const { addGenreToState } = useContext(GenreContext);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const reformatDate = iso => {
    const [year, month, day] = iso.split('-');
    return `${Number(day)} ${monthNames[Number(month) - 1]} ${year}`;
  };

  return (
    <>
      <div className='movie-details__top'>
        <h1 className='movie-details__title'>{title}</h1>
        <p className='movie-details__tagline'>{tagline && tagline}</p>
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
            <strong>
              {runtime} mins{' '}
              <span
                role='img'
                aria-label='clock'
                style={{ fontSize: '1.7rem' }}>
                ⌛︎
              </span>
            </strong>{' '}
            - runtime
          </p>
        </time>
        <div className='movie-details__description'>
          <p>
            <strong>
              {release_date && reformatDate(release_date).toString()}
            </strong>{' '}
            - release
          </p>
          <p className='movie-details__overview'>{overview}</p>
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
        </div>
      </div>
      <img
        className='movie-details__img'
        src={`${imageUrl}${poster_path}`}
        alt={`${title} Poster`}
      />
    </>
  );
};
