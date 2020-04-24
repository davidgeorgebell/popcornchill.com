import React, { createContext, useState } from 'react';

export const GenreContext = createContext();

export const GenreContextProvider = props => {
  const [genre, setGenre] = useState('');

  return (
    <GenreContext.Provider value={{ genre, setGenre }}>
      {props.children}
    </GenreContext.Provider>
  );
};
