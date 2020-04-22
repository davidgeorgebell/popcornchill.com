import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <nav>
        <h1 className='title'>
          <Link to='/' className='home-link'>
            {' '}
            Popcorn Chill{' '}
            <span role='img' aria-label='popcorn'>
              🍿
            </span>
          </Link>
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
