var email=document.getElementById("email1").value;
var password=document.getElementById("password1").value;


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ivztYskNwBTD1MAaSO9dvhXZsDLl2FU",
  authDomain: "signup-c1d77.firebaseapp.com",
  projectId: "signup-c1d77",
  storageBucket: "signup-c1d77.appspot.com",
  messagingSenderId: "1088773483742",
  appId: "1:1088773483742:web:006d9522508207e945264f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });