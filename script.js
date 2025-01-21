// Firebase Configuration
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

// Registration Function (using only username and password)
function signUp(username, password) {
  auth.createUserWithEmailAndPassword(username + "@chatterwave.com", password) // Fake email using username
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User created and logged in:", user);
      window.location.href = "/dashboard.html"; // Change to the actual dashboard page
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error during sign up:", errorCode, errorMessage);
      alert("Error: " + errorMessage);
    });
}

// Handle Form Submission
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  signUp(username, password);
});