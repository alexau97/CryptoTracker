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
var favMap = {}
var coinToPrice = {}
var indexToCoin = {}
var coinToIndex = {}
if(localStorage.getItem("favorites") == "") {
  var favArray = [] 
}
else {
  var favArray = JSON.parse(localStorage.getItem("favorites"));
}
var space = " "
// console.log(localStorage.getItem("favorites"));
// for(var b = 0; b < favArray.length; b++) {
//   console.log(favArray[b]);
// }

function toAccount() {
  localStorage.setItem("favorites", JSON.stringify(favArray));
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
  if(e.target.checked) { // If the item is favorited
    // favMap[e.target.getAttribute('label')] = true;
    favArray[coinToIndex[e.target.getAttribute('label')]] = true;
    console.log(coinToIndex[e.target.getAttribute('label')]);
    console.log(favArray[coinToIndex[e.target.getAttribute('label')]]);
  }
    //favs[e.target.getAttribute('label')] = true;
  else {
    favArray[coinToIndex[e.target.getAttribute('label')]] = false;
    //console.log(coinToIndex[e.target.getAttribute('label')]);
    //console.log(favArray[coinToIndex[e.target.getAttribute('label')]]);

    // favMap[e.target.getAttribute('label')] = false;
    //favArray[coinToIndex[e.target.getAttribute('label')]] = false;

  }
    //favs[e.target.getAttribute('label')] = false;
  //console.log(favs[e.target.getAttribute('label')]);
}
          // <ol>
          //   {prices.map((item,index)=>
          //     <li key = {index}>{item}</li>
          //     )}
          // </ol>

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
		for (var i = 0; i<data.length; i++){
			coinArray.push(data[i].name);
			priceArray.push(data[i].price_usd);
      if(localStorage.getItem("favorites") == "") {
        favArray.push(false);//yumyumcoding
      }
      indexToCoin[i] = data[i].name;
      coinToPrice[data[i].name] = data[i].price_usd;
      coinToIndex[data[i].name] = i;
      //favs[data[i].name] = false;
      //console.log(favs[data[i].name]);
			//console.log("current coin = " + coin[i]);
		}
    //localStorage.setItem("storeCoin", JSON.stringify(coinArray));
    //localStorage.setItem("storePrice", JSON.stringify(priceArray));
    //localStorage.setItem("favorites", JSON.stringify(favs));
    this.setState({
      coins: coinArray,
      prices: priceArray
    });
    // localStorage.setItem("storeCoin", JSON.stringify(coins));
    // localStorage.setItem("storePrice", JSON.stringify(prices));
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
            <center className = {classes.center}>
            <div className={classes.control_group}>
              <ol>
                
                {coins.map((item,index)=>
                  
                  <li
                    key = {index}>{item} 
                    {space}
                    {prices[index]}
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
        </center>
        </div>
        )
    }

}


export default Home;