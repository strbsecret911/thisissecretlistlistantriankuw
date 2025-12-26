import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase config (punya kamu, AMAN dipakai)
const firebaseConfig = {
  apiKey: "AIzaSyBN2PxHOA9u-I2iPCX_5gT1iogL5zYGHhM",
  authDomain: "antrianky.firebaseapp.com",
  projectId: "antrianky",
  storageBucket: "antrianky.appspot.com",
  messagingSenderId: "194560917480",
  appId: "1:194560917480:web:99c4bc99bfb9fcc747ae5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
