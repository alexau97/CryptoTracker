import React, { Component } from 'react';
import classes from './Compare.css';
import SignIn from '../Login/Login';
import Auth from '../Login/Auth';
import axios from 'axios';
import history from '../../history';
import { Route, Switch, Redirect } from 'react-router-dom';

var coinArray = []
var leftCoinData = []
var rightCoinData = []
var fullCoinData = []

if(localStorage.getItem("favorites") == "" || localStorage.getItem("favorites") == null) {
  var favArray = [] 
  //var checkArray = []
}
else {
  var favArray = JSON.parse(localStorage.getItem("favorites"));
  //var checkArray = JSON.parse(localStorage.getItem("checked"));
}

function toAccount() {
  localStorage.setItem("favorites", JSON.stringify(favArray));
  //localStorage.setItem("checked", JSON.stringify(checkArray));
    //window.location.reload();
  history.push('/account');
  window.location.reload();
}


function toHome() {
    //localStorage.setItem("favorites", JSON.stringify(favs));
    //window.location.reload();
  history.push('/home');
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

function compareCoins(){
	var leftCoin = document.getElementById("leftdd").value;
	var rightCoin = document.getElementById("rightdd").value;
	for(var i = 0; i < fullCoinData.length; i++){
		console.log('loading...')
		if(leftCoin === fullCoinData[i].id){
			leftCoinData = fullCoinData[i];
			break;
		}
	}
		for(var i = 0; i < fullCoinData.length; i++){
		console.log('loading...')
		if(rightCoin === fullCoinData[i].id){
			rightCoinData = fullCoinData[i];
			break;
		}
	}
	console.log(leftCoinData);
	console.log(rightCoinData);

	var leftName = leftCoinData.name;
	var leftPrice = leftCoinData.price_usd;
	var leftMarketCap = leftCoinData.market_cap_usd;
	var leftAvailableSupply = leftCoinData.available_supply;
	var leftTotalSupply = leftCoinData.total_supply;
	var leftPercentChange_1h = leftCoinData.percent_change_1h;
	var leftPercentChange_24h = leftCoinData.percent_change_24h;
	var leftPercentChange_7d = leftCoinData.percent_change_7d;

	var rightName = rightCoinData.name;
	var rightPrice = rightCoinData.price_usd;
	var rightMarketCap = rightCoinData.market_cap_usd;
	var rightAvailableSupply = rightCoinData.available_supply;
	var rightTotalSupply = rightCoinData.total_supply;
	var rightPercentChange_1h = rightCoinData.percent_change_1h;
	var rightPercentChange_24h = rightCoinData.percent_change_24h;
	var rightPercentChange_7d = rightCoinData.percent_change_7d;

	document.getElementById("leftlabel1").innerHTML = "Name";
	document.getElementById("leftlabel2").innerHTML = "Price(USD)";
	document.getElementById("leftlabel3").innerHTML = "Market Cap";
	document.getElementById("leftlabel4").innerHTML = "Available Supply";
	document.getElementById("leftlabel5").innerHTML = "Total Supply";
	document.getElementById("leftlabel6").innerHTML = "% Change in Last Hour";
	document.getElementById("leftlabel7").innerHTML = "% Change in Last Day";
	document.getElementById("leftlabel8").innerHTML = "% Change in Last Week";

	document.getElementById("leftvar1").innerHTML = leftName;
	document.getElementById("leftvar2").innerHTML = leftPrice;
	document.getElementById("leftvar3").innerHTML = leftMarketCap;
	document.getElementById("leftvar4").innerHTML = leftAvailableSupply;
	document.getElementById("leftvar5").innerHTML = leftTotalSupply;
	document.getElementById("leftvar6").innerHTML = leftPercentChange_1h;
	document.getElementById("leftvar7").innerHTML = leftPercentChange_24h;
	document.getElementById("leftvar8").innerHTML = leftPercentChange_7d;

	document.getElementById("rightvar1").innerHTML = rightName;
	document.getElementById("rightvar2").innerHTML = rightPrice;
	document.getElementById("rightvar3").innerHTML = rightMarketCap;
	document.getElementById("rightvar4").innerHTML = rightAvailableSupply;
	document.getElementById("rightvar5").innerHTML = rightTotalSupply;
	document.getElementById("rightvar6").innerHTML = rightPercentChange_1h;
	document.getElementById("rightvar7").innerHTML = rightPercentChange_24h;
	document.getElementById("rightvar8").innerHTML = rightPercentChange_7d;

	document.getElementById("rightlabel1").innerHTML = "Name";
	document.getElementById("rightlabel2").innerHTML = "Price(USD)";
	document.getElementById("rightlabel3").innerHTML = "Market Cap";
	document.getElementById("rightlabel4").innerHTML = "Available Supply";
	document.getElementById("rightlabel5").innerHTML = "Total Supply";
	document.getElementById("rightlabel6").innerHTML = "% Change in Last Hour";
	document.getElementById("rightlabel7").innerHTML = "% Change in Last Day";
	document.getElementById("rightlabel8").innerHTML = "% Change in Last Week";

}


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
		fullCoinData = data;
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
						<button onClick={toHome} className={classes.nav_button}>
							Home
						</button>

						<button className={classes.nav_button}>
							Compare
						</button>


						<button onClick={toAccount} className={classes.nav_button}>
							Account 
						</button>

						<button onClick={signOut} className={classes.nav_button}>
							Logout
						</button>
					</nav>
				</header>

			<div className={classes.dropdownmenu}>
				<select id="leftdd">
					<option value="bitcoin">Bitcoin</option>
					<option value="ethereum">Ethereum</option>
					<option value="ripple">Ripple</option>
					<option value="bitcoin-cash">Bitcoin Cash</option>
					<option value="litecoin">Litecoin</option>
					<option value="neo">NEO</option>
					<option value="stellar">Stellar</option>
					<option value="cardano">Cardano</option>
					<option value="eos">EOS</option>
					<option value="monero">Monero</option>
					<option value="dash">Dash</option>
					<option value="iota">IOTA</option>
					<option value="nem">NEM</option>
					<option value="tron">TRON</option>
					<option value="tether">Tether</option>
					<option value="ethereum-classic">Ethereum Classic</option>
					<option value="vechain">VeChain</option>
					<option value="lisk">Lisk</option>
					<option value="nano">Nano</option>
					<option value="bitcoin-gold">Bitcoin Gold</option>
					<option value="omisego">OmiseGO</option>
					<option value="qtum">Qtum</option>
					<option value="zcash">Zcash</option>
					<option value="icon">ICON</option>
					<option value="binance-coin">Binance Coin</option>
					<option value="digixdao">DigixDAO</option>
					<option value="steem">Steem</option>
					<option value="bytecoin-bcn">Bytecoin</option>
					<option value="populous">Populous</option>
					<option value="waves">Waves</option>
					<option value="verge">Verge</option>
					<option value="stratis">Stratis</option>
					<option value="maker">Maker</option>
					<option value="rchain">RChain</option>
					<option value="status">Status</option>
					<option value="dogecoin">Dogecoin</option>
					<option value="siacoin">Siacoin</option>
					<option value="decred">Decred</option>
					<option value="bitshares">BitShares</option>
					<option value="aeternity">Aeternity</option>
					<option value="waltonchain">Waltonchain</option>
					<option value="augur">Augur</option>
					<option value="bytom">Bytom</option>
					<option value="komodo">Komodo</option>
					<option value="0x">0x</option>
					<option value="veritaseum">Veritaseum</option>
					<option value="ark">Ark</option>
					<option value="electroneum">Electroneum</option>
					<option value="kucoin-shares">KuCoin Shares</option>
					<option value="zilliqa">Zilliqa</option>
					<option value="ardor">Ardor</option>
					<option value="cryptonex">Cryptonex</option>
					<option value="basic-attention-token">Basic Attention Token</option>
					<option value="syscoin">Syscoin</option>
					<option value="hshare">Hshare</option>
					<option value="gas">Gas</option>
					<option value="dragonchain">Dragonchain</option>
					<option value="golem-network-tokens">Golem</option>
					<option value="pivx">PIVX</option>
					<option value="digibyte">DigiByte</option>
					<option value="monacoin">MonaCoin</option>
					<option value="qash">QASH</option>
					<option value="aion">Aion</option>
					<option value="factom">Factom</option>
					<option value="ethos">Ethos</option>
					<option value="loopring">Loopring</option>
					<option value="nebulas-token">Nebulas</option>
					<option value="funfair">FunFair</option>
					<option value="revain">Revain</option>
					<option value="aelf">aelf</option>
					<option value="particl">Particl</option>
					<option value="byteball">Byteball Bytes</option>
					<option value="zcoin">ZCoin</option>
					<option value="reddcoin">ReddCoin</option>
					<option value="dentacoin">Dentacoin</option>
					<option value="gxchain">GXChain</option>
					<option value="emercoin">Emercoin</option>
					<option value="kin">Kin</option>
					<option value="chainlink">ChainLink</option>
					<option value="salt">SALT</option>
					<option value="kyber-network">Kyber Network</option>
					<option value="polymath-network">Polymath</option>
					<option value="nxt">Nxt</option>
					<option value="nexus">Nexus</option>
					<option value="smartcash">SmartCash</option>
					<option value="bancor">Bancor</option>
					<option value="power-ledger">Power Ledger</option>
					<option value="dent">Dent</option>
					<option value="iostoken">IOStoken</option>
					<option value="neblio">Nelbio</option>
					<option value="iconomi">Iconomi</option>
					<option value="sirin-labs-token">SIRIN LABS Token</option>
					<option value="singularitynet">SingularityNET</option>
					<option value="bitcore">Bitcore</option>
					<option value="tenx">TenX</option>
					<option value="request-network">Request Network</option>
					<option value="storj">Storj</option>
					<option value="enigma-project">Enigma</option>
					<option value="maidsafecoin">MaidSafeCoin</option>
					<option value="pillar">Pillar</option>
				</select>
			</div>

			<div className={classes.dropdownmenu}>
				<select id="rightdd">
					<option value="bitcoin">Bitcoin</option>
					<option value="ethereum">Ethereum</option>
					<option value="ripple">Ripple</option>
					<option value="bitcoin-cash">Bitcoin Cash</option>
					<option value="litecoin">Litecoin</option>
					<option value="neo">NEO</option>
					<option value="stellar">Stellar</option>
					<option value="cardano">Cardano</option>
					<option value="eos">EOS</option>
					<option value="monero">Monero</option>
					<option value="dash">Dash</option>
					<option value="iota">IOTA</option>
					<option value="nem">NEM</option>
					<option value="tron">TRON</option>
					<option value="tether">Tether</option>
					<option value="ethereum-classic">Ethereum Classic</option>
					<option value="vechain">VeChain</option>
					<option value="lisk">Lisk</option>
					<option value="nano">Nano</option>
					<option value="bitcoin-gold">Bitcoin Gold</option>
					<option value="omisego">OmiseGO</option>
					<option value="qtum">Qtum</option>
					<option value="zcash">Zcash</option>
					<option value="icon">ICON</option>
					<option value="binance-coin">Binance Coin</option>
					<option value="digixdao">DigixDAO</option>
					<option value="steem">Steem</option>
					<option value="bytecoin-bcn">Bytecoin</option>
					<option value="populous">Populous</option>
					<option value="waves">Waves</option>
					<option value="verge">Verge</option>
					<option value="stratis">Stratis</option>
					<option value="maker">Maker</option>
					<option value="rchain">RChain</option>
					<option value="status">Status</option>
					<option value="dogecoin">Dogecoin</option>
					<option value="siacoin">Siacoin</option>
					<option value="decred">Decred</option>
					<option value="bitshares">BitShares</option>
					<option value="aeternity">Aeternity</option>
					<option value="waltonchain">Waltonchain</option>
					<option value="augur">Augur</option>
					<option value="bytom">Bytom</option>
					<option value="komodo">Komodo</option>
					<option value="0x">0x</option>
					<option value="veritaseum">Veritaseum</option>
					<option value="ark">Ark</option>
					<option value="electroneum">Electroneum</option>
					<option value="kucoin-shares">KuCoin Shares</option>
					<option value="zilliqa">Zilliqa</option>
					<option value="ardor">Ardor</option>
					<option value="cryptonex">Cryptonex</option>
					<option value="basic-attention-token">Basic Attention Token</option>
					<option value="syscoin">Syscoin</option>
					<option value="hshare">Hshare</option>
					<option value="gas">Gas</option>
					<option value="dragonchain">Dragonchain</option>
					<option value="golem-network-tokens">Golem</option>
					<option value="pivx">PIVX</option>
					<option value="digibyte">DigiByte</option>
					<option value="monacoin">MonaCoin</option>
					<option value="qash">QASH</option>
					<option value="aion">Aion</option>
					<option value="factom">Factom</option>
					<option value="ethos">Ethos</option>
					<option value="loopring">Loopring</option>
					<option value="nebulas-token">Nebulas</option>
					<option value="funfair">FunFair</option>
					<option value="revain">Revain</option>
					<option value="aelf">aelf</option>
					<option value="particl">Particl</option>
					<option value="byteball">Byteball Bytes</option>
					<option value="zcoin">ZCoin</option>
					<option value="reddcoin">ReddCoin</option>
					<option value="dentacoin">Dentacoin</option>
					<option value="gxchain">GXChain</option>
					<option value="emercoin">Emercoin</option>
					<option value="kin">Kin</option>
					<option value="chainlink">ChainLink</option>
					<option value="salt">SALT</option>
					<option value="kyber-network">Kyber Network</option>
					<option value="polymath-network">Polymath</option>
					<option value="nxt">Nxt</option>
					<option value="nexus">Nexus</option>
					<option value="smartcash">SmartCash</option>
					<option value="bancor">Bancor</option>
					<option value="power-ledger">Power Ledger</option>
					<option value="dent">Dent</option>
					<option value="iostoken">IOStoken</option>
					<option value="neblio">Nelbio</option>
					<option value="iconomi">Iconomi</option>
					<option value="sirin-labs-token">SIRIN LABS Token</option>
					<option value="singularitynet">SingularityNET</option>
					<option value="bitcore">Bitcore</option>
					<option value="tenx">TenX</option>
					<option value="request-network">Request Network</option>
					<option value="storj">Storj</option>
					<option value="enigma-project">Enigma</option>
					<option value="maidsafecoin">MaidSafecoin</option>
					<option value="pillar">Pillar</option>
				</select>
			</div>
			<br/>

			<center>
				<button onClick={compareCoins}>Compare</button>
			</center>

			<br/>
			<br/>

			<div className={classes.row}>
				<div className={classes.column1}>
					<p id="leftlabel1"></p>
					<p id="leftlabel2"></p>
					<p id="leftlabel3"></p>
					<p id="leftlabel4"></p>
					<p id="leftlabel5"></p>
					<p id="leftlabel6"></p>
					<p id="leftlabel7"></p>
					<p id="leftlabel8"></p>
				</div>
				<div className={classes.midcolumn}>
					<p id="leftvar1"></p>
					<p id="leftvar2"></p>
					<p id="leftvar3"></p>
					<p id="leftvar4"></p>
					<p id="leftvar5"></p>
					<p id="leftvar6"></p>
					<p id="leftvar7"></p>
					<p id="leftvar8"></p>
				</div>
				<div className={classes.midcolumn}>
					<p id="rightvar1"></p>
					<p id="rightvar2"></p>
					<p id="rightvar3"></p>
					<p id="rightvar4"></p>
					<p id="rightvar5"></p>
					<p id="rightvar6"></p>
					<p id="rightvar7"></p>
					<p id="rightvar8"></p>
				</div>
				<div className={classes.column4}>
					<p id="rightlabel1"></p>
					<p id="rightlabel2"></p>
					<p id="rightlabel3"></p>
					<p id="rightlabel4"></p>
					<p id="rightlabel5"></p>
					<p id="rightlabel6"></p>
					<p id="rightlabel7"></p>
					<p id="rightlabel8"></p>
				</div>
			</div>

		</div>

		)
	}
}

export default Compare;