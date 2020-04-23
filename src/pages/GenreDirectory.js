import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_MOVIE_KEY;
const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

export const GenreDirectory = () => {
  const { response, error, loading } = useFetch(`${genreListUrl}`);
  if (loading) return null;
  if (error) return <h1>Error!</h1>;

  const { genres } = response;

  console.log(genres);
  return (
    <div>
      <h1>Genres</h1>
      <ul>
        {genres &&
          genres.map(genre => (
            <li key={genre.name}>
              <Link className='genre-link' to={`/genre/${genre.id}`}>
                {genre.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
