import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import { ThemeContext } from './contexts/ThemeContext';
import '../src/styles/global.css';
import { Directory } from './pages/Directory';

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='App'>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Directory />
        </main>
      </div>
    </div>
  );
}

export default App;
