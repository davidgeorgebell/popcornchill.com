import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <ul>
        <li>
          {' '}
          <Link to='/genres' className='genre-link'>
            Genres
          </Link>
        </li>
        <li>
          <Link to='/search' className='genre-link'>
            Search
          </Link>
        </li>
      </ul>
      <button
        onClick={() => handleOptionChange('popular')}
        disabled={option === 'popular'}>
        Popular
      </button>
      <button
        onClick={() => handleOptionChange('top_rated')}
        disabled={option === 'top_rated'}>
        Top Rated
      </button>

      {option === 'popular' ? (
        <h2 className='option-title'>Popular</h2>
      ) : (
        <h2 className='option-title'>Top Rated</h2>
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
