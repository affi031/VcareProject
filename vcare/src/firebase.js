import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBiX6c17whn1FPIxSED6Rlvg5obn5PvoVA",
    authDomain: "vcare-5ab07.firebaseapp.com",
    projectId: "vcare-5ab07",
    storageBucket: "vcare-5ab07.appspot.com",
    messagingSenderId: "763805955771",
    appId: "1:763805955771:web:d4cc4e673c2fdd95205b9e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { db , auth };