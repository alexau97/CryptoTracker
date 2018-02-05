import React, { Component } from 'react';
import classes from './LandingPage.css';

import screenshot from './screenshot.png';
import SignIn from '../Login/Login';
import Auth from '../Login/Auth'
import axios from 'axios'

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
    }

    handleClick () {
      console.log('Button pressed')
      axios.get('https://api.coinmarketcap.com/v1/ticker/ripple/')
        .then(response=>this.setState({coin: response.data[0].name, price: response.data[0].price_usd}))

    }

    render(){
        return (
        <div className={classes.landingPage}>
          <header className={classes.header}>
            <h2 className={classes.title}>
              CryptoTracker
            </h2>

            <nav className={classes.navigation}>
              <button className={classes.nav_button} onClick={this.handleClick}>
                Check price (this is a test pls no make fun of design)
              </button>
              <button className={classes.nav_button}>
                Sign In
              </button>
            </nav>
          </header>
          <p className={classes.description}>
            {this.state.coin}, {this.state.price}
          </p>
          <SignIn />


          <div className={classes.about}>

            <p className={classes.copyright}>
              Copyright 2018
            </p>
          </div>
        
        </div>
        )
    }
}

export default LandingPage;
