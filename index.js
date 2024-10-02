import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
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

// Attach the event listener to the form in "container2"
document.querySelector("#container2 form").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    register(); // Call the register function
});

// Register function to handle the signup
async function register() {
    const full_name = document.querySelector("#container2 input[name='name']").value;
    const email = document.querySelector("#container2 input[name='email']").value;
    const pwd = document.querySelector("#container2 input[name='pwd']").value;
    // Validate fields
    if (!validate_field(full_name)) {
        alert("Name is required");
        return;
    }
    if (!validate_email(email) || !validate_pwd(pwd)) {
        alert("Email or password is incorrect.");
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pwd);

        const user = userCredential.user;
        const user_data = {
            email: email,
            full_name: full_name,
            last_login: Date.now(),
        };

        await set(ref(database, "users/" + user.uid), user_data);
        alert("User created and saved to database!");
    } catch (error) {
        alert(error.message);
    }
}

// Validation functions
function validate_email(email) {
    const expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expression.test(email);
}

function validate_pwd(pwd) {
    return pwd.length >= 6; // Check if password is at least 6 characters long
}

function validate_field(field) {
    return field != null && field.length > 0; // Check if field is not empty
}
