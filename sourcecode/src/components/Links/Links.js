import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './Account.css';
import history from '../../history';
import Auth from '../Login/Auth'
import obj from '../Login/GoogleSignIn/GoogleSignIn'
import axios from 'axios';

var coinArray = []
var priceArray = []
var coinToPrice = {}
var indexToCoin = {}
var coinToIndex = {}
var displayFav = []
//var favs = []
var space = " "
var name = localStorage.getItem("Name");
var image = localStorage.getItem("ImageURL");
var email = localStorage.getItem("Email");
var id = localStorage.getItem("ID");
//if(localStorage.getItem("favorites") != null) {
console.log(localStorage.getItem("favorites"));
//}

function displayFavorites() {
  // if(localStorage.getItem("favorites") != null) {
  var tempFav = JSON.parse(localStorage.getItem("favorites"));
  for (var x = 0; x < tempFav.length; x++) {
    //console.log(tempFav[x]);
    if(tempFav[x]) { // item is favorited
      //console.log("displayFavorites");
      displayFav.push(x);
    }
  }
  // }
  //   // console.log(x + " " + tempFav[x]);  

}

function toHome() {
    //localStorage.setItem("favorites", JSON.stringify(favs));
    //window.location.reload();
  history.push('/home');
  window.location.reload();
}

function signOut() {
    localStorage.clear();
    history.push('/');
    window.location.reload();
  }


// console.log(localStorage.getItem("storeCoin"));
// console.log(localStorage.getItem("storePrice"));
class Account extends React.Component {
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
      console.log("Account Page mounted");
      // axios.get('https://api.coinmarketcap.com/v1/ticker/')
      //  .then(response=>console.log(response.data))
      displayFavorites();
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
        indexToCoin[i] = data[i].name;
        coinToPrice[data[i].name] = data[i].price_usd;
        coinToIndex[data[i].name] = i;
        //favs.push(false);
        //favs[data[i].name] = false;
        //console.log(favs[data[i].name]);
        //console.log("current coin = " + coin[i]);
      }
      // localStorage.setItem("storeCoin", JSON.stringify(coinArray));
      // localStorage.setItem("storePrice", JSON.stringify(priceArray));
      // localStorage.setItem("favorites", JSON.stringify(favs));
      this.setState({
        coins: coinArray,
        prices: priceArray
      });
      // localStorage.setItem("storeCoin", JSON.stringify(coins));
      // localStorage.setItem("storePrice", JSON.stringify(prices));
  }

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
          <br/>
          <br/>
          <center> <h2> Favorite Coins for {name} </h2> </center>
          <center className = {classes.center}>
            <div className={classes.control_group}>
            <ul>    
              {displayFav.map((item,index)=>    
                  <li
                    key = {index}>{item} 
                    {space}
                    {indexToCoin[item]}
                    {space}
                    {coinToPrice[indexToCoin[item]]}
                  </li>
                )}
            </ul>   
            </div>
        </center>
        </div>
    );
  }

}

            // <p className={classes.copyright}>
            //   Copyright 2018
            // </p>
export default Account;
