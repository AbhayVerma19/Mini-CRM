// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider , signInWithPopup, signOut} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh3CSHtY0Q4rJko2IAf88jFwPbc4qd40E",
  authDomain: "mini-crm-e4c75.firebaseapp.com",
  projectId: "mini-crm-e4c75",
  storageBucket: "mini-crm-e4c75.appspot.com",
  messagingSenderId: "342446343722",
  appId: "1:342446343722:web:082d3aeb623fc7dddae553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

const logOut = () => {
  return signOut(auth);
};


export { auth, signInWithGoogle, logOut };
