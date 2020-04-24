import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GenreContext } from '../contexts/GenreContext';
import { useFetch } from '../hooks/useFetch';
import '../styles/genre-directory.css';

const API_KEY = process.env.REACT_APP_MOVIE_KEY;
const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

export const GenreDirectory = () => {
  const { addGenreToState } = useContext(GenreContext);
  const { response, error, loading } = useFetch(`${genreListUrl}`);
  if (loading) return null;
  if (error) return <h1>Error!</h1>;

  const { genres } = response;

  console.log(genres);
  return (
    <div>
      <h1 className='option-title'>Genres</h1>
      {/* <h2 className='popcorn-chill'>popcorn chill</h2> */}
      <ul className='genre-directory__list'>
        {genres &&
          genres.map(genre => (
            <li key={genre.name} className='genre-directory__list-item'>
              <Link
                onClick={() => addGenreToState(genre.name)}
                className='genre-link'
                to={`/genre/${genre.id}`}>
                {genre.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
