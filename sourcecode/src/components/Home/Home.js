import React, { Component } from 'react';
import classes from './Home.css';
import SignIn from '../Login/Login';
import Auth from '../Login/Auth';
import axios from 'axios';
import history from '../../history';
import { Route, Switch, Redirect } from 'react-router-dom';
//this.state.coin = ['Bitcoin', 'Ethereum', 'Ripple', ...]
//this.state.price = ['10,000.05', '942.55', '1.45', ...]
import PrettyCheckbox from 'pretty-checkbox-vue';
//Vue.use(PrettyCheckbox);

var coinArray = []
var priceArray = []
var urlArray = []
var favMap = {}
var coinToPrice = {}
var indexToCoin = {}
var coinToIndex = {}
if(localStorage.getItem("favorites") == "" || localStorage.getItem("favorites") == null) {
  var favArray = [] 
  //var checkArray = []
}
else {
  var favArray = JSON.parse(localStorage.getItem("favorites"));
  //var checkArray = JSON.parse(localStorage.getItem("checked"));
}
var space = " "
// console.log(localStorage.getItem("favorites"));
// for(var b = 0; b < favArray.length; b++) {
//   console.log(favArray[b]);
// }

function toAccount() {
  localStorage.setItem("favorites", JSON.stringify(favArray));
  //localStorage.setItem("checked", JSON.stringify(checkArray));
    //window.location.reload();
  history.push('/account');
  window.location.reload();
}

function toCompare() {
    //localStorage.setItem("favorites", JSON.stringify(favs));
    //window.location.reload();
  history.push('/compare');
  window.location.reload();
}

function signOut() {
   // console.log(coinArray[1]);
   //console.log(priceArray[1]);
    Auth.logOut();
    localStorage.clear();
    history.push('/');
    window.location.reload();
  }

function handleFormSubmit(e) {
  console.log('checkbox checked: ',(e.target.checked), e.target.getAttribute('label'));
  if(!favArray[coinToIndex[e.target.getAttribute('label')]]) { // If the item is favorited
    // favMap[e.target.getAttribute('label')] = true;
    favArray[coinToIndex[e.target.getAttribute('label')]] = true;
    //checkArray[coinToIndex[e.target.getAttribute('label')]] = true;
    //console.log(coinToIndex[e.target.getAttribute('label')]);
    console.log(favArray[coinToIndex[e.target.getAttribute('label')]]);
    localStorage.setItem("favorites", JSON.stringify(favArray));
    window.location.reload();
   // e.checked = true;
  }
    //favs[e.target.getAttribute('label')] = true;
  else {
    favArray[coinToIndex[e.target.getAttribute('label')]] = false;
    //checkArray[coinToIndex[e.target.getAttribute('label')]] = false;
    //e.checked = false;
    //console.log(coinToIndex[e.target.getAttribute('label')]);
    console.log(favArray[coinToIndex[e.target.getAttribute('label')]]);
    localStorage.setItem("favorites", JSON.stringify(favArray));
    window.location.reload();

    // favMap[e.target.getAttribute('label')] = false;
    //favArray[coinToIndex[e.target.getAttribute('label')]] = false;

  }
    //favs[e.target.getAttribute('label')] = false;
  //console.log(favs[e.target.getAttribute('label')]);
  localStorage.setItem("favorites", JSON.stringify(favArray));
  window.location.reload();
}
function displayCheck() {
  for(var n = 0; n < 100; n++) {
    var temp = document.getElementById(n.toString());
    console.log(temp.type);
  }
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
      prices: [],
      urls: []
    }
    this.setArray = this.setArray.bind(this)
  }
  componentDidMount(){
    console.log("Home Page mounted");
    // axios.get('https://api.coinmarketcap.com/v1/ticker/')
    //  .then(response=>console.log(response.data))
    this.getPrices();
  }
  getPrices(){
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response=>this.setArray(response.data))
  }
  setArray(data){
    var url = "";
    for (var i = 0; i<data.length; i++){
      coinArray.push(data[i].name);
      priceArray.push(data[i].price_usd);
      url = "https://bittrex.com/Market/Index?MarketName=USDT-" + data[i].symbol;
      urlArray.push(url)
      if(localStorage.getItem("favorites") == "" || localStorage.getItem("favorites") == null) {
        favArray.push(false);//yumyumcoding
        //checkArray.push(false);
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
      prices: priceArray,
      urls: urlArray
    });
    // localStorage.setItem("storeCoin", JSON.stringify(coins));
    // localStorage.setItem("storePrice", JSON.stringify(prices));
}



   render(){

      let coins = this.state.coins;
      let prices = this.state.prices;
      let urls = this.state.urls;

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

               <button onClick={toCompare}className={classes.nav_button}>
                Compare
              </button>

              <button onClick={toAccount}className={classes.nav_button}>
                Account
              </button>


            <button onClick={signOut}className={classes.nav_button}>
              Logout
            </button>

            </nav>
          </header>
          
          <center>
            
              <div className={classes.control_group}>
                <table className="uk-table uk-table-hover uk-table-striped">
                  <thead>
                    <tr>
                      <th>Coin Name</th>
                      <th>Coin Price</th>
                      <th>Buy Coin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coins.map((item,index)=>
                      
                    <tr>
                        <td> 
                        <input 
                          className="uk-checkbox"
                          id={index.toString()} type="checkbox" 
                          onChange={handleFormSubmit} 
                          checked = {favArray[index]}
                          label = {coins[index]}
                        />
                        {space}
                        {item} </td>
                        <td>{prices[index]}</td>
                        <td><a href={urls[index]}>Buy {coins[index]}</a></td>
                    </tr>
                    )}i
                </tbody>
                </table>
              </div>
            
          </center>
            
        </div>
        )
    }

}


export default Home;