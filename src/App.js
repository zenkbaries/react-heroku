// src/App.js

import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile.js';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
