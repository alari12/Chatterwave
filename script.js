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

// Registration Function (without email verification)
function signUp(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User has been created and logged in immediately
      const user = userCredential.user;
      console.log("User created and logged in:", user);
      // Redirect to dashboard after successful sign up
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
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signUp(email, password);
});