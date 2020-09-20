import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDnSDxGoKLx1Wbh9uOlJAbdTdDxiSJcBLg",
    authDomain: "facebook-messenger-clone-26f9a.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-26f9a.firebaseio.com",
    projectId: "facebook-messenger-clone-26f9a",
    storageBucket: "facebook-messenger-clone-26f9a.appspot.com",
    messagingSenderId: "598480144872",
    appId: "1:598480144872:web:87209299d34fb4f9877c5d",
    measurementId: "G-8J4W5W6HT3"

})

const db = firebaseApp.firestore();

export default db;