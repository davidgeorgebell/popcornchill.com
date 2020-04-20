import React from 'react';
import { useFetch } from '../hooks/useFetch';

export const Directory = () => {
  const response = useFetch(
    `https://api.themoviedb.org/3/movie/550?api_key=11863a769dbc470cee78fb16cf3cfe4d`
  );
  console.log(response);
  return (
    <div>
      <h1>Directory</h1>
    </div>
  );
};
