import React, { Component } from 'react';
import classes from './Home.css';
import SignIn from '../Login/Login';
import Auth from '../Login/Auth';
import axios from 'axios';
import history from '../../history';
import { Route, Switch, Redirect } from 'react-router-dom';
//this.state.coin = ['Bitcoin', 'Ethereum', 'Ripple', ...]
//this.state.price = ['10,000.05', '942.55', '1.45', ...]




var coinArray = []
var priceArray = []


function toAccount() {
    //window.location.reload();
  history.push('/account');
  window.location.reload();
	}

function signOut() {
	 // console.log(coinArray[1]);
	 //console.log(priceArray[1]);

    localStorage.clear();
    history.push('/');
    window.location.reload();
  }

function handleFormSubmit(e) {
  console.log('checkbox checked: ',(e.target.checked), e.target.getAttribute('label'));
}


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "http://localhost:3001/users/",
			coins: [],
      prices: []
		}
		this.setArray = this.setArray.bind(this)
	}
	componentDidMount(){
		console.log("Home Page mounted");
		// axios.get('https://api.coinmarketcap.com/v1/ticker/')
		// 	.then(response=>console.log(response.data))
    this.getPrices();
	}
	getPrices(){
		axios.get('https://api.coinmarketcap.com/v1/ticker/')
			.then(response=>this.setArray(response.data))
	}
	setArray(data){
		for (var i = 0; i<10; i++){
			coinArray.push(data[i].name);
			priceArray.push(data[i].price_usd);
			//console.log("current coin = " + coin[i]);
		}
    this.setState({
      coins: coinArray,
      prices: priceArray
    });

}


   render(){

      let coins = this.state.coins;
      let prices = this.state.prices;

        return (

        <div className={classes.home}>
          <header className={classes.header}>
            <h2 className={classes.title}>
              Home Page
            </h2>
           <nav className={classes.navigation}>
              <button className={classes.nav_button}>
                Home
              </button>

              <button onClick={toAccount}className={classes.nav_button}>
                Account
              </button>

            <button onClick={signOut}className={classes.nav_button}>
              Logout
            </button>

            </nav>
          </header>
            <div className={classes.control_group}>
              <ol>
                
                {coins.map((item,index)=>
                  
                  <li
                    key = {index}>{item} 
                    <input 
                    className={classes.red_heart_checkbox} 
                    id='redHeart' type="checkbox" 
                    onChange={handleFormSubmit} 
                    label = {coins[index]}
                  />
                  </li>
                )}
              </ol>
               
            </div>
          
          <ol>
            {prices.map((item,index)=>
              <li key = {index}>{item}</li>
              )}
          </ol>

          <div className={classes.about}>
            <h3 className={classes.about_title}>
              About
            </h3>
            <p className={classes.about_description}>
              This is a project done by a group of students from University of California, Santa Cruz. This is a web application that is created using JavaScript, React, and Google Firebase. 
              The purpose for this web application is to keep track of Cryptocurrencies.
            </p>
            <p className={classes.copyright}>
              Copyright 2018
            </p>
          </div>
        
        </div>
        )
    }

}


export default Home;