import React from 'react';

import { MovieItem } from './MovieItem';
import '../styles/movie-list.css';

export const MovieList = ({ results }) => {
  return (
    <div className='movie-list-wrapper'>
      <h2 className='popcorn-chill'>popcorn chill</h2>
      <ul className='movie-list'>
        {results &&
          results.map(movie => {
            return <MovieItem movie={movie} key={movie.id} />;
          })}
      </ul>
    </div>
  );
};
