import React, { createContext, useState, useEffect } from 'react';

export const GenreContext = createContext();

export const GenreContextProvider = props => {
  const [genre, setGenre] = useState('');

  const addGenreToState = str => {
    setGenre(str);
  };
  useEffect(() => {
    const genreToDisplay = localStorage.getItem('genre');
    if (genreToDisplay) {
      setGenre(JSON.parse(genreToDisplay));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('genre', JSON.stringify(genre));
  }, [genre]);

  return (
    <GenreContext.Provider value={{ genre, setGenre, addGenreToState }}>
      {props.children}
    </GenreContext.Provider>
  );
};
