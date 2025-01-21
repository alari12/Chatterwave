// Firebase Configuration (same as before)
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Log In Function
function logIn(username, password) {
  auth.signInWithEmailAndPassword(username + "@chatterwave.com", password) // Fake email using username
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "/dashboard.html"; // Redirect to dashboard
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
}

// Handle Form Submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  logIn(username, password);
});