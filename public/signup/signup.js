// The global "firebase" namespace is available courtesy of the /__/firebase/init.js loader 
const auth = firebase.auth(); 

// Initialize the Google Auth Provider instance & configure parameters 
const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account' }); 

// Target Interactive DOM Elements 
const signupForm = document.getElementById('signupForm'); 
const loginBtn = document.getElementById('googleButton'); 

// ========================================== 
// METHOD A: Native Email/Password Registration 
// ========================================== 
if (signupForm) { 
  signupForm.addEventListener('submit', async (e) => { 
    e.preventDefault(); 
    const fullName = document.getElementById('name').value; 
    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value; 

    try { 
      // Create user account credentials 
      const userCredential = await auth.createUserWithEmailAndPassword(email, password); 
      
      // Explicitly attach user's Name to the core profile block 
      await userCredential.user.updateProfile({ displayName: fullName }); 
      console.log("Success! Account registered for:", userCredential.user.email); 

      // FIXED DYNAMIC REDIRECT: Uses an absolute path relative to the root domain
      window.location.href = '/dashboard/dashboard.html'; 

    } catch (error) { 
      console.error("Email registration failure:", error.code, error.message); 
      if (error.code === 'auth/email-already-in-use') { 
        alert('This email address is already registered.'); 
      } else if (error.code === 'auth/weak-password') { 
        alert('The password is too weak. Please use at least 6 characters.'); 
      } else { 
        alert(`Error: ${error.message}`); 
      } 
    } 
  }); 
} 

// ========================================== 
// METHOD B: Federated Google Sign-In 
// ========================================== 
if (loginBtn) { 
  loginBtn.addEventListener('click', () => { 
    console.log("Launching authentic login popup..."); 
    auth.signInWithPopup(provider) 
      .then((result) => { 
        console.log("Authentication successful!", result.user); 

        // FIXED DYNAMIC REDIRECT: Uses an absolute path relative to the root domain
        window.location.href = '/dashboard/dashboard.html'; 
      }) 
      .catch((error) => { 
        console.error("Firebase Auth Failure:", error.code, error.message); 
        if (error.code !== 'auth/popup-closed-by-user') { 
          alert(`Authentication Error: ${error.message}`); 
        } 
      }); 
  }); 
}
