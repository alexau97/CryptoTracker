import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './Account.css';
import history from '../../history';
import Auth from '../Login/Auth'
import obj from '../Login/GoogleSignIn/GoogleSignIn'




function toHome() {
    //window.location.reload();
  history.push('/home');
  window.location.reload();
}

function signOut() {
    localStorage.clear();
    history.push('/');
    window.location.reload();
  }


var name = localStorage.getItem("Name");
var image = localStorage.getItem("ImageURL");
var email = localStorage.getItem("Email");
var id = localStorage.getItem("ID");

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

            <button onClick={signOut}className={classes.nav_button}>
              Logout
            </button>
            </nav>
          </header>
          <center> 
            <br/>
            <br/>
            <img src={image}/>
            <h3>Account Information for {name} </h3> 
            <h3>Email: {email} </h3> 
            <h3> ID: {id} </h3>
          </center>
            <p className={classes.copyright}>
              Copyright 2018
            </p>
        </div>
    );
  }

}

export default Account;
