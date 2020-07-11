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
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route path="/:id">
        <Movie addToSavedList={savedList} />
      </Route>
    </div>
  );
};

export default App;
