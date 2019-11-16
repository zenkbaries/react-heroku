// src/App.js

import React from 'react';
import react_logo from './react_logo.svg';
import heroku_logo from './heroku_logo.svg';
import './App.css';
import Navigation from './components/navigation';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from "./components/"

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <header className="App-header">
        <Navigation />
      </header>
      <Switch>
        <Route path="/" exact />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  </div>

  );
}

export default App;
