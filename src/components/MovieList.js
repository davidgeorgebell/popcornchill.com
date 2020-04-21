import React from 'react';
import { MovieItem } from './MovieItem';

export const MovieList = ({ results }) => {
  return (
    <ul>
      {results &&
        results.map(movie => {
          return <MovieItem movie={movie} key={movie.id} />;
        })}
    </ul>
  );
};
