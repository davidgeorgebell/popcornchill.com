import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import { ThemeContext } from './contexts/ThemeContext';
import '../src/styles/global.css';
import { Directory } from './pages/Directory';
import { Details } from './pages/Details';

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <div className='App'>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Switch>
              <Route exact path='/'>
                <Directory />
              </Route>
              <Route exact path='/details/:movieId'>
                <Details />
              </Route>
              <Redirect to='/' />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
