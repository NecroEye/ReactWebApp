import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB_HskwgeafEjOIthnj_1HvzoGh4I9X4V8",
    authDomain: "reactproje-383bc.firebaseapp.com",
    projectId: "reactproje-383bc",
    storageBucket: "reactproje-383bc.appspot.com",
    messagingSenderId: "1090765999198",
    appId: "1:1090765999198:web:8824cda48246b4472cb8cf",
    measurementId: "G-BBPCPFLV74"
};


const firebaseConnection = firebase.initializeApp(firebaseConfig);

const db = firebaseConnection.firestore();

export default db;
