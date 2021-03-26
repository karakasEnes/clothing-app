import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";


const config = {
    apiKey: "AIzaSyB0LlHDa4k45s6HPZPtOBD01oDbLjJ3qFc",
    authDomain: "clothes-db-1074c.firebaseapp.com",
    projectId: "clothes-db-1074c",
    storageBucket: "clothes-db-1074c.appspot.com",
    messagingSenderId: "993153284174",
    appId: "1:993153284174:web:41ae613ecd8af24576eb1f",
    measurementId: "G-1T663Y97EW"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({propt: "select_account"});

  export const signInWithGoogle = () => {auth.signInWithPopup(provider)};

  export default firebase;