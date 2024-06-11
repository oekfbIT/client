// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBcjqmnsPYYNYMlrTz6p2xQjLPw67YFSsY",
    authDomain: "oekfbbucket.firebaseapp.com",
    projectId: "oekfbbucket",
    storageBucket: "oekfbbucket.appspot.com",
    messagingSenderId: "805622026908",
    appId: "1:805622026908:web:4b2226bad206d68ed69359",
    measurementId: "G-4LS7QNF72N"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
