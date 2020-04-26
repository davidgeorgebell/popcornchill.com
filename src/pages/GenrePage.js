import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { GenreContext } from '../contexts/GenreContext';
import { useFetch } from '../hooks/useFetch';
import { PaginationButtons } from '../components/PaginationButtons';
import { MovieList } from '../components/MovieList';

const API_KEY = process.env.REACT_APP_MOVIE_KEY;
const baseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}
`;

export const GenrePage = () => {
  const { genre } = useContext(GenreContext);
  const [pageNumber, setPageNumber] = useState(1);

  const { genreId } = useParams();
  const { response, error, loading } = useFetch(
    `${baseURL}&language=en&page=${pageNumber}&with_genres=${genreId}`
  );
  if (loading) return null;
  if (error) return <h1>Error!</h1>;

  const { results, page, total_pages } = response;

  const pageLimit = page === 0 || page < total_pages;
  return (
    <div>
      <h1 className='option-title'>{genre}</h1>
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
