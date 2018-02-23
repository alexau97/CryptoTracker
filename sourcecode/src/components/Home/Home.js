import React, { Component } from 'react';
import classes from './Home.css';
import SignIn from '../Login/Login';
import Auth from '../Login/Auth';
import axios from 'axios';
import history from '../../history';

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
    localStorage.clear();
    history.push('/');
    window.location.reload();
  }

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "http://localhost:3001/users/",
			coin: [],
        	price: []
		}
		//this.chooseAPICall = this.chooseAPICall.bind(this)
	}

	componentDidMount(){
		console.log("Home Page mounted");
		axios.get('https://api.coinmarketcap.com/v1/ticker/')
			.then(response=>console.log(response.data))
		this.getPrices();
	}

	getPrices(){
		axios.get('https://api.coinmarketcap.com/v1/ticker/')
			.then(response=>this.setArray(response.data))
	}

	setArray(data){
		for (var i = 0; i<10; i++){
			coinArray[i] = data[i].name;
			priceArray[i] = data[i].name;
			console.log("current coin = " + coinArray[i]);
		}
	}

	// chooseAPICall(cryptoName){
	// 	console.log(cryptoName+'has been chosen');
	// 	var apiCallURL = 'https://api.coinmarketcap.com/v1/ticker/'+cryptoName + '/';
	// 	console.log("call url" + apiCallURL);
	// 	axios.get(String(apiCallURL))
	// 		.then(response=>this.setState({
	// 			coin: response.data[0].name,
	// 			price: response.data[0].price_usd
	// 		}))
	// }


   render(){
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
          <p className={classes.description}>
             {coinArray[0]}, {priceArray[0]}
           </p>
          <ul>
          	{coinArray.map((item,index) => 
          		<li key = {index}>{item}</li>
          		)}
          </ul>
          <SignIn />

          <div className={classes.about}>
            <h3 className={classes.about_title}>
              About
            </h3>
            <p className={classes.about_description}>
              This is a project done by a group of students from University of California, Santa Cruz. This is a web application that is created using JavaScript, React, and Google Firebase. 
              The purpose for this web application is to
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