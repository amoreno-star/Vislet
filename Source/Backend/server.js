// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFAR1ndU7YMNbXCE22ZUAEsG9a3InIa6c",
  authDomain: "vislet2.firebaseapp.com",
  projectId: "vislet2",
  storageBucket: "vislet2.firebasestorage.app",
  messagingSenderId: "730732470355",
  appId: "1:730732470355:web:9e3f6afeb7930ff56266a6",
  measurementId: "G-NB0MCDKXNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);