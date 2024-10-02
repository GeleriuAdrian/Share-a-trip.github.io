import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0YP67nFsGYveLKCZjFwqZ96NGsFFluxE",
    authDomain: "share-a-trip-eb44c.firebaseapp.com",
    projectId: "share-a-trip-eb44c",
    storageBucket: "share-a-trip-eb44c.appspot.com",
    messagingSenderId: "223107149355",
    appId: "1:223107149355:web:1a8ccd41e9bde8aa76846e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.addEventListener('load', () => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            window.location.href = "index.html"; // Redirect if not logged in
        }
    });
});