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
import { GenrePage } from './pages/GenrePage';
import { GenreDirectory } from './pages/GenreDirectory';
import { Search } from './pages/Search';
import { GenreContextProvider } from './contexts/GenreContext';

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <GenreContextProvider>
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
                <Route exact path='/genre/:genreId'>
                  <GenrePage />
                </Route>
                <Route exact path='/genres'>
                  <GenreDirectory />
                </Route>
                <Route exact path='/search'>
                  <Search />
                </Route>
                <Redirect to='/' />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </GenreContextProvider>
  );
}

export default App;
