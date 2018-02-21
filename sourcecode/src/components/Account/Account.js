import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './Account.css';
import history from '../../history';


function toHome() {
    //window.location.reload();
  history.push('/home');
  window.location.reload();
}

class Account extends React.Component {

  render() {

    return (
        <div className={classes.landingPage}>
          <header className={classes.header}>
            <h2 className={classes.title}>
              CryptoTracker
            </h2>

            <nav className={classes.navigation}>
              <button onClick={toHome} className={classes.nav_button}>
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

export default Account;
