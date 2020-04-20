import React from 'react';
import { useFetch } from '../hooks/useFetch';

const API_KEY = process.env.REACT_APP_MOVIE_KEY;
export const Directory = () => {
  const { response, error, loading } = useFetch(
    `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
  );
  if (loading) return <h1>Loading...</h1>;
  if (error)
    return (
      <h1>
        Whoops. <p>Sorry but an error has occurred.</p>
      </h1>
    );
  console.log(response);
  return (
    <div>
      <h1>Directory</h1>
    </div>
  );
};
