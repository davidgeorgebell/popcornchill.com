import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import { ThemeContext } from './contexts/ThemeContext';
import '../src/styles/global.css';

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='App'>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <h1>Hello World</h1>
          <p>
            Test lorem ipsum docum dipsum Test lorem ipsum docum dipsum Test
            lorem ipsum docum dipsum Test lorem ipsum docum dipsum Test lorem
            ipsum docum dipsum Test lorem ipsum docum dipsum Test lorem ipsum
            docum dipsum Test lorem ipsum docum dipsum Test lorem ipsum docum
            dipsum Test lorem ipsum docum dipsum Test lorem ipsum docum dipsum
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
