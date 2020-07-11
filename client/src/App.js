import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);



  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path="/Movie/:id">
          <Movie addToSavedList={savedList} />
        </Route>
        <Route exact path="/">
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
