import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD_GiT4p3wS24nJCiZgQZByr4ybran50k",
  authDomain: "clone-f6853.firebaseapp.com",
  projectId: "clone-f6853",
  storageBucket: "clone-f6853.appspot.com",
  messagingSenderId: "337306334945",
  appId: "1:337306334945:web:3d7742eecaa09f9af3e9a0",
  measurementId: "G-KKC48VJBR4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };