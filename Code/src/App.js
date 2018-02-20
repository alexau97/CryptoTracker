import React, { Component } from 'react';
import logo from './logo.svg';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Application from './components/Application';

import { Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import Auth from './components/Login/Auth'


 /*<Route path='/account' exact component = {Account} />*/

class App extends Component {
  render() {
    return (
      <Switch>
          {/* <Route path='/' component = {} /> */}
          <Route path='/' exact component = {LandingPage} />
          <Route path='/home' exact component = {Home} />
      </Switch>
    );
  }
}

export default App;
