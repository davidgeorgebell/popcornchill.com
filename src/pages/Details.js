import React from 'react';

import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_MOVIE_KEY;
const baseURL = `https://api.themoviedb.org/3/movie/`;

export const Details = () => {
  const { movieId } = useParams();

  const { response, error, loading } = useFetch(
    `${baseURL}${movieId}?api_key=${API_KEY}&language=en`
  );
  if (loading) return null;
  if (error) return <h1>Error!</h1>;

  console.log('RESPONSE', response.title);

  return (
    <div>
      <h1>{response.title}</h1>
    </div>
  );
};
