import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { MovieList } from '../components/MovieList';
import { BackButton } from '../components/BackButton';

const API_KEY = process.env.REACT_APP_MOVIE_KEY;
const language = '&language=en';

export const Search = () => {
  const [searched, setSearched] = useState('');
  const [userSearchInput, setUserSearchInput] = useState('');

  const { response, error, loading } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}${language}&query=${searched}&include_adult=false`
  );
  if (error) return <h2>An error has occurred</h2>;
  if (loading) return null;

  const { results } = response;

  const handleSearch = e => {
    setUserSearchInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSearched(userSearchInput);
  };

  return (
    <div className='search-page-wrapper'>
      <BackButton>Back</BackButton>
      <form type='submit' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='type to search'
          onChange={handleSearch}
          required
        />
      </form>
      <MovieList results={results} />
    </div>
  );
};
