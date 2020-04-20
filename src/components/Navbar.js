import React from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <nav>
        <h1>
          Popcorn Chill{' '}
          <span role='img' aria-label='popcorn emoji'>
            🍿
          </span>
        </h1>
        <div className='toggle-container'>
          <span className='toggle'>
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              type='checkbox'
              className='checkbox'
              id='checkbox'
            />
            <label htmlFor='checkbox' />
          </span>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
