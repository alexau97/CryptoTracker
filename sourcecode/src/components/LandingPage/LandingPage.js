import React, { Component } from 'react';
import classes from './LandingPage.css';

import SignIn from '../Login/Login';
import Auth from '../Login/Auth'
import GoogleSignIn from '../Login/GoogleSignIn/GoogleSignIn'
import axios from 'axios'
import { Route, Switch, Redirect } from 'react-router-dom';

import SignUp from '../FirebaseLogin/index';

//localStorage.setItem("favorites", "");

class LandingPage extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        url: "http://localhost:3001/users/",
        coin: '',
        price: ''
      }
       this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
      console.log("Landing Page mounted")
      localStorage.setItem("favorites", "");
    }

    handleClick () {
      console.log('Button pressed')
      axios.get('https://api.coinmarketcap.com/v1/ticker/ripple/')
        .then(response=>this.setState({
          coin: response.data[0].name, 
          price: response.data[0].price_usd
        }))
    }
            // <nav className={classes.navigation}>
            //   <button className={classes.nav_button} onClick={this.handleClick}>
            //     Check price (this is a test pls no make fun of design)
            //   </button>
            // </nav>

    render(){
        return (
        <div className={classes.landingPage}>
          <header className={classes.header}>
            <h2 className={classes.title}>
              CryptoTracker
            </h2>
          </header>
          <p className={classes.description}>
            {this.state.coin} {this.state.price}
          </p>
          <br/>
          <br/>
          <br/>
          <SignUp />
          <br/>
          <h1>or</h1>
          <br/>
          <h1>Sign In with Google Account</h1>
          <SignIn />

          <div className={classes.about}>
            <h3 className={classes.about_title}>
              About
            </h3>
            <p className={classes.about_description}>
              This is a project done by a group of students from University of California, Santa Cruz. This is a web application that is created using JavaScript, React, and Google Firebase. 
              The purpose for this web application is to track and save prices of specific Crytocurrencies.
            </p>
            <p className={classes.copyright}>
              Copyright 2018
            </p>
          </div>
        
        </div>
        )
    }
}

export default LandingPage;
