// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCUHUQfI15HAvqcaNLrtlQnNy5G_D1_3A4",
  authDomain: "olx-clone-2-a605f.firebaseapp.com",
  projectId: "olx-clone-2-a605f",
  storageBucket: "olx-clone-2-a605f.appspot.com",
  messagingSenderId: "925492300490",
  appId: "1:925492300490:web:07ef2bde7f17bfa64b8233",
  measurementId: "G-Q5EJL2T49P"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);


