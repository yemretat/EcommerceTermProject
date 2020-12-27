import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCRBzOmaWA280cAcULtPl7P4W5rMyJ6z4",
  authDomain: "clone-94a6c.firebaseapp.com",
  databaseURL: "https://clone-94a6c.firebaseio.com",
  projectId: "clone-94a6c",
  storageBucket: "clone-94a6c.appspot.com",
  messagingSenderId: "359919687436",
  appId: "1:359919687436:web:2cd94dd7ca5f8ebee21b29",
  measurementId: "G-8MNCRJBVYK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //real time database initialize
const auth = firebase.auth(); // gives us sign in etc

export { db, auth };
