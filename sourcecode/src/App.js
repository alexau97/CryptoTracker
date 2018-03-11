import React, { Component } from 'react';
import logo from './logo.svg';
import LandingPage from './components/LandingPage/LandingPage';

import { Route, Switch, Link } from 'react-router-dom';

import Home from './components/Home/Home';
import Account from './components/Account/Account';
import Login from './components/Login/Login';
import Auth from './components/Login/Auth';
import Compare from './components/Compare/Compare';

import history from './history';

import axios from 'axios';
window.axios = axios;
window.Auth = Auth;

class App extends Component {
  render() {
    return (
      <Switch>
          {/* <Route path='/' component = {} /> */}
          <Route path='/' exact component = {LandingPage} />
          <Route path='/home' exact component = {Home} />
          <Route path='/account' exact component = {Account} />
          <Route path='/compare' exact component = {Compare} />
      </Switch>
    );
  }
}

export default App;
