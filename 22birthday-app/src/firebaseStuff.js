import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyCW40ATEBtsdOio2f0XxVCxzerBZEpPi2c",
    authDomain: "birthday-cc786.firebaseapp.com",
    projectId: "birthday-cc786",
    storageBucket: "birthday-cc786.appspot.com",
    messagingSenderId: "936975930392",
    appId: "1:936975930392:web:1c10678d0a1465988b1f6d",
    measurementId: "G-6Z3Y9NP2JH"
  });
  
  const auth = firebase.auth();
  const firestore = firebase.firestore();

  export {auth, firestore}