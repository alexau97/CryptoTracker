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

function signOut() {
   // console.log(coinArray[1]);
   //console.log(priceArray[1]);
    Auth.logOut();
    localStorage.clear();
    history.push('/');
    window.location.reload();
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

			<div>
				<select>
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
				</select>
			</div>

			<div>
				<select>
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
				</select>
			</div>
		</div>



		)
	}
}

export default Compare;