import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAFtoxBxXbr7TKZLwSjPHByNN5-Pt5__C4",
  authDomain: "react-ecommerce-e89ed.firebaseapp.com",
  databaseURL: "https://react-ecommerce-e89ed.firebaseio.com",
  projectId: "react-ecommerce-e89ed",
  storageBucket: "react-ecommerce-e89ed.appspot.com",
  messagingSenderId: "594758580314",
  appId: "1:594758580314:web:696d79b756dd2e1d568063",
  measurementId: "G-7THBCR0RXN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;