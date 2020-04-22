import React from 'react';
import { MovieItem } from './MovieItem';

export const MovieList = ({ results }) => {
  return (
    <ul className='movie-list'>
      {results &&
        results.map(movie => {
          return <MovieItem movie={movie} key={movie.id} />;
        })}
    </ul>
  );
};
