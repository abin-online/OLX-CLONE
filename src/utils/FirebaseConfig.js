// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3-_MxasmR1TTgQyZHWyLcKTMF3RYe3lU",
  authDomain: "olx-clone-8b75b.firebaseapp.com",
  projectId: "olx-clone-8b75b",
  storageBucket: "olx-clone-8b75b.appspot.com",
  messagingSenderId: "381446265931",
  appId: "1:381446265931:web:578e40299e3f224cb741ce",
  measurementId: "G-KYDWZFLZWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);