import React, { Component } from 'react';
import classes from './Compare.css';
import SignIn from '../Login/Login';
import Auth from '../Login/Auth';
import axios from 'axios';
import history from '../../history';
import { Route, Switch, Redirect } from 'react-router-dom';

var coinArray = []
var leftCompArray = []
var rightCompArray = []

class Compare extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "http://localhost:3001/users/",
			coins: []
		}
		this.setArray = this.setArray.bind(this)
	}

	componentDidMount(){
		console.log("Compare page mounted");
		this.getCoins();
	}

	getCoins(){
		axios.get('https://api.coinmarketcap.com/v1/ticker/')
			.then(response=>this.setArray(response.data))
	}

	setArray(data){
		for (var i = 0; i < data.length; i++){
			coinArray.push(data[i].name);
		}
		this.setState({
			coins: coinArray
		});
	}

	render(){

		let coins = this.state.coins;

		return(
			<div className={classes.compare}>
				<header className={classes.header}>
					<h2 className={classes.title}>
						Compare
					</h2>
					
					<nav className={classes.navigation}>
						<button className={classes.nav_button}>
							Home
						</button>

						<button onClick={toAccount} className={classes.nav_button}>
							Account 
						</button>

						<button onClick={signOut} className={classes.nav_button}>
							Logout
						</button>
					</nav>
				</header>

				<center className={classes.center}>
					<div className={classes.control_group}




		)
	}
}