// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_HskwgeafEjOIthnj_1HvzoGh4I9X4V8",
    authDomain: "reactproje-383bc.firebaseapp.com",
    projectId: "reactproje-383bc",
    storageBucket: "reactproje-383bc.appspot.com",
    messagingSenderId: "1090765999198",
    appId: "1:1090765999198:web:8824cda48246b4472cb8cf",
    measurementId: "G-BBPCPFLV74"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export default db;

