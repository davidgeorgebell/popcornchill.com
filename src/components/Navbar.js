import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='navbar-wrapper'>
        <nav>
          <h1 className='title'>
            <NavLink to='/' className='home-link'>
              Popcorn Chill
            </NavLink>
          </h1>

          <ul className='navbar-list'>
            <li className='navbar-list__item'>
              {' '}
              <NavLink to='/genres' className='genre-link'>
                Genres
              </NavLink>
            </li>
            <li className='navbar-list__item'>
              <NavLink to='/search' className='genre-link'>
                Search
              </NavLink>
            </li>
          </ul>
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
    </div>
  );
};
export default Navbar;
