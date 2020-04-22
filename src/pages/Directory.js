import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { MovieList } from '../components/MovieList';
import { PaginationButtons } from '../components/PaginationButtons';
import { GenreDirectory } from './GenreDirectory';

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

  const { results, page, total_pages } = response;

  const handleOptionChange = e => {
    setOption(e.target.value);
    setPageNumber(1);
  };
  const pageLimit = page === 0 || page < total_pages;
  return (
    <div>
      <GenreDirectory />
      <select
        value={option}
        onChange={e => handleOptionChange(e)}
        onBlur={e => handleOptionChange(e)}>
        <option value='popular'>Popular</option>
        <option value='top_rated'>Top Rated</option>
        <option value='now_playing'>Now Playing</option>
      </select>
      <MovieList results={results} />
      {results && (
        <PaginationButtons
          pageLimit={pageLimit}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      )}
    </div>
  );
};
