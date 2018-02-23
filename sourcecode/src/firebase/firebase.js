// firebase object from the firebase node package
import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD6nR2hek78D1VTd_UsFPHnu8YoqDtqBJo",
    authDomain: "cryptotracker-94a02.firebaseapp.com",
    databaseURL: "https://cryptotracker-94a02.firebaseio.com",
    projectId: "cryptotracker-94a02",
    storageBucket: "cryptotracker-94a02.appspot.com",
    messagingSenderId: "847018443072"
  };
  
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

//initialize the auth object
const auth = firebase.auth();

export {
  auth,
}


