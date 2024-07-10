import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBIDO2jxUnj4PKD_kV0pDWcqrnZmcbFP2o",
  authDomain: "crown-db-9ed28.firebaseapp.com",
  projectId: "crown-db-9ed28",
  storageBucket: "crown-db-9ed28.appspot.com",
  messagingSenderId: "893224780746",
  appId: "1:893224780746:web:47eef693f79ebf188a0533",
  measurementId: "G-T6ENH42SZ8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
