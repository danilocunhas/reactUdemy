import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDyEevgjY2Cd5tJJgJBJOlKpm5kwIc-HWg",
    authDomain: "series-2793a.firebaseapp.com",
    databaseURL: "https://series-2793a.firebaseio.com",
    projectId: "series-2793a",
    storageBucket: "series-2793a.appspot.com",
    messagingSenderId: "467257499875",
    appId: "1:467257499875:web:af6717d0748759410965d6",
    measurementId: "G-7S65D1X6LN"
};
// Initialize Firebase


const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;