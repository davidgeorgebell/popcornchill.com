import React from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <nav>
        <div className='toggle-container'>
          <span style={{ color: darkMode ? 'grey' : 'yellow' }}>☀︎</span>
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
          <span style={{ color: darkMode ? '#9c27b0' : 'grey' }}>☽</span>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
