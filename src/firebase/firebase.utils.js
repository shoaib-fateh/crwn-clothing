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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((objectToAdd) => {
    const newDocRef = collectionRef.doc();
    console.log("New Document Reference:", newDocRef);
    batch.set(newDocRef, objectToAdd);
  });

  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
