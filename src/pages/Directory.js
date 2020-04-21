import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const API_KEY = process.env.REACT_APP_MOVIE_KEY;
const baseURL = `https://api.themoviedb.org/3/movie/`;

export const Directory = () => {
  const [option, setOption] = useState('popular');
  const [pageNumber, setPageNumber] = useState(1);

  const { response, error, loading } = useFetch(
    `${baseURL}${option}?api_key=${API_KEY}&language=en&page=${pageNumber}&region=GB`
  );
  if (loading) return null;
  if (error) return <h1>Error!</h1>;
  console.log(response);

  const { results, page, total_pages } = response;

  const handleOptionChange = e => {
    setOption(e.target.value);
    setPageNumber(1);
  };
  const pageLimit = page === 0 || page < total_pages;
  return (
    <div>
      <select
        value={option}
        onChange={e => handleOptionChange(e)}
        onBlur={e => handleOptionChange(e)}>
        <option value='popular'>Popular</option>
        <option value='top_rated'>Top Rated</option>
        <option value='now_playing'>Now Playing</option>
      </select>
      <ul>
        {results &&
          results.map(movie => {
            return <li key={movie.id}>{movie.title}</li>;
          })}
      </ul>
      {results && (
        <>
          <button
            disabled={pageNumber === 1}
            onClick={() => setPageNumber(pageNumber - 1)}>
            PREV
          </button>
          <button
            disabled={!pageLimit}
            onClick={() => setPageNumber(pageNumber + 1)}>
            NEXT
          </button>
        </>
      )}
    </div>
  );
};
