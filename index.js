import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
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
const database = getDatabase(app);
console.log("Firebase App initialized:", app);

// Attach event listeners to forms
document.querySelector("#container2 form").addEventListener("submit", (e) => handleFormSubmit(e, register));
document.querySelector("#container1 form").addEventListener("submit", (e) => handleFormSubmit(e, login));

function handleFormSubmit(event, action) {
    event.preventDefault();
    action();
}

// Register function to handle the signup
async function register() {
    const full_name = document.querySelector("#container2 input[name='name']").value;
    const email = document.querySelector("#container2 input[name='email']").value;
    const pwd = document.querySelector("#container2 input[name='pwd']").value;

    if (!validate_field(full_name) || !validate_email(email) || !validate_pwd(pwd)) {
        return alert("Please fill out all fields correctly.");
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pwd);
        await set(ref(database, "users/" + userCredential.user.uid), {
            email,
            full_name,
            last_login: Date.now(),
        });
        alert("User created and saved to database!");
    } catch (error) {
        alert(error.message);
    }
}

// Login function to handle user sign-in
async function login() {
    const email = document.querySelector("#container1 input[name='email']").value;
    const pwd = document.querySelector("#container1 input[name='pwd']").value;

    if (!validate_email(email) || !validate_pwd(pwd)) {
        return alert("Email or password is incorrect.");
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, pwd);
        await update(ref(database, "users/" + userCredential.user.uid), {
            last_login: Date.now(),
        });
        alert("User logged in successfully!");
        window.location.replace("trips.html");
    } catch (error) {
        alert(error.message);
    }
}

// Validation Functions
const validate_email = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validate_pwd = (pwd) => pwd.length >= 6;
const validate_field = (field) => field?.trim().length > 0;
