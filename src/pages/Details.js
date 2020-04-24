import React from 'react';

import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { MovieDetails } from '../components/MovieDetails';
import { BackButton } from '../components/BackButton';
import '../styles/movie-details.css';

const API_KEY = process.env.REACT_APP_MOVIE_KEY;
const baseURL = `https://api.themoviedb.org/3/movie/`;

export const Details = () => {
  const { movieId } = useParams();

  const { response, error, loading } = useFetch(
    `${baseURL}${movieId}?api_key=${API_KEY}&language=en`
  );
  if (loading) return null;
  if (error) return <h1>Error!</h1>;

  const imageUrl = 'https://image.tmdb.org/t/p/w400/';

  console.log('RESPONSE', response);
  const {
    title,
    vote_average,
    overview,
    runtime,
    poster_path,
    release_date,
    genres,
    tagline,
  } = response;
  return (
    <>
      <div className='movie-details-wrapper'>
        <MovieDetails
          title={title}
          vote_average={vote_average}
          overview={overview}
          runtime={runtime}
          poster_path={poster_path}
          release_date={release_date}
          genres={genres}
          imageUrl={imageUrl}
          tagline={tagline}
        />
      </div>
      <BackButton>⬅ BACK</BackButton>
    </>
  );
};
