// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-ae8f5.firebaseapp.com",
  projectId: "mern-auth-ae8f5",
  storageBucket: "mern-auth-ae8f5.appspot.com",
  messagingSenderId: "793260420238",
  appId: "1:793260420238:web:fe83e51298573e16a26ddf"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);