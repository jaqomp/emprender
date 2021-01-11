import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    
        apiKey: "AIzaSyACKuBG_IfduncYgPywTqSYAFTRK5li6yQ",
        authDomain: "emprender-8c998.firebaseapp.com",
        databaseURL: "https://emprender-8c998.firebaseio.com",
        projectId: "emprender-8c998",
        storageBucket: "emprender-8c998.appspot.com",
        messagingSenderId: "1030182215437",
        appId: "1:1030182215437:web:466d73a400bdb1947b1a44"
      };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const authentication = firebase.auth();
const db = firebase.firestore();
  export {authentication,db}