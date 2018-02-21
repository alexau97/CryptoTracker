import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './Home.css';

class Home extends React.Component {

  render() {

    return (
        <div className={classes.landingPage}>
          <header className={classes.header}>
            <h2 className={classes.title}>
              CryptoTracker
            </h2>

            <nav className={classes.navigation}>
              <button className={classes.nav_button}>
                Home
              </button>

              <button className={classes.nav_button}>
                Account
              </button>
            </nav>

          </header>
          
        </div>
    );
  }

}

export default Home;
