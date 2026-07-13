// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFkdiyplEUFUE4IvQ20tYf_EfoP9vAV90",
  authDomain: "vislet1.firebaseapp.com",
  projectId: "vislet1",
  storageBucket: "vislet1.firebasestorage.app",
  messagingSenderId: "456559616661",
  appId: "1:456559616661:web:fc083991cf2b2498fc719c",
  measurementId: "G-6J78QFZ99C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);