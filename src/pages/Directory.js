import React, { useState } from 'react';

import { useFetch } from '../hooks/useFetch';
import { MovieList } from '../components/MovieList';
import { PaginationButtons } from '../components/PaginationButtons';

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
  const pageLimit = page === 0 || page < total_pages;

  const handleOptionChange = option => {
    setOption(option);
    setPageNumber(1);
  };

  return (
    <div>
      <div className='option-buttons-wrapper'>
        <button
          className='option-button'
          onClick={() => handleOptionChange('popular')}
          disabled={option === 'popular'}>
          Popular
        </button>
        <button
          className='option-button'
          onClick={() => handleOptionChange('top_rated')}
          disabled={option === 'top_rated'}>
          Top Rated
        </button>
        <button
          className='option-button'
          onClick={() => handleOptionChange('now_playing')}
          disabled={option === 'now_playing'}>
          Now Playing
        </button>
      </div>
      {option === 'popular' && <h1 className='option-title'>Popular</h1>}
      {option === 'top_rated' && <h1 className='option-title'>Top Rated</h1>}
      {option === 'now_playing' && (
        <h1 className='option-title'>Now Playing</h1>
      )}

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
