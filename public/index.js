const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ 
  prompt: 'select_account' 
});

const getStartedBtn = document.getElementById('getStartedButton');
const loginBtn = document.getElementById('googleButton');

if (getStartedBtn) {
  getStartedBtn.addEventListener('click', () => {
    // Navigates directly into the nested dashboard folder
    window.location.href = './signup/signup.html';
  });
}

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    console.log("Launching authentic login popup...");
    
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log("Authentication successful!", result.user);
        
        // Redirects smoothly into the dashboard folder after popup closing
        window.location.href = './dashboard/dashboard.html';
      })
      .catch((error) => {
        console.error("Firebase Auth Failure:", error.code, error.message);
        if (error.code !== 'auth/popup-closed-by-user') {
          alert(`Authentication Error: ${error.message}`);
        }
      });
  });
}