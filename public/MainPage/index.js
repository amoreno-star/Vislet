// 1. Import the necessary Firebase functions
import { initializeApp } from "https://gstatic.com";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://gstatic.com";
const cors = require('cors')({ origin: true });

// 2. Your project's Firebase configuration (Replace with your actual keys from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCFAR1ndU7YMNbXCE22ZUAEsG9a3InIa6c",
  authDomain: "vislet2.firebaseapp.com",
  projectId: "vislet2",
  storageBucket: "vislet2.firebasestorage.app",
  messagingSenderId: "730732470355",
  appId: "1:730732470355:web:9e3f6afeb7930ff56266a6",
  measurementId: "G-NB0MCDKXNP"
};

// 3. Initialize Firebase and Auth instances globally inside this module
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

app.use(
    cors({
        orgin: "https://vislet2.web.app/"
    })
)
// 4. Wait for the page structure to be fully loaded
window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded. Attaching button listeners...");

    const getStartedBtn = document.getElementById('getStartedButton');
    const loginBtn = document.getElementById('googleButton');

    // Diagnostic checks to alert you immediately if the IDs are broken
    if (!getStartedBtn) console.error("Error: HTML element with ID 'getStartedButton' was not found.");
    if (!loginBtn) console.error("Error: HTML element with ID 'googleButton' was not found.");

    // Handle "Get Started" Redirect
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            window.location.href = '../Dashboard/dashboard.html';
        });
    }

    // Handle Google Login Click
    if (loginBtn) {
        loginBtn.addEventListener('click', (event) => {
            console.log("Success! Click action recognized by the browser engine.");
            
            signInWithPopup(auth, provider)
                .then((result) => {
                    console.log("Successfully logged in:", result.user);
                    window.location.href = '../Dashboard/dashboard.html';
                })
                .catch((error) => {
                    console.error("Login failed or closed:", error.message);
                });
        });
    }
});