import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBdS8exUpSf_H3eMULiDNKxRWo97gV3xTc",
    authDomain: "ditter-42cd9.firebaseapp.com",
    databaseURL: "https://ditter-42cd9.firebaseio.com",
    projectId: "ditter-42cd9",
    storageBucket: "ditter-42cd9.appspot.com",
    messagingSenderId: "30590291690",
    appId: "1:30590291690:web:c5657255c565a12b71d193",
    measurementId: "G-BD9EQQHQDK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;