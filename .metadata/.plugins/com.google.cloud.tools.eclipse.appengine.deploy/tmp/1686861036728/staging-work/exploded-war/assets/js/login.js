import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
		apiKey: "AIzaSyCvtoqv2y0OMQe1l6CU5dGh5oGkHpNB-zw",
		  authDomain: "medicineinvent-ad5f3.firebaseapp.com",
		  projectId: "medicineinvent-ad5f3",
		  storageBucket: "medicineinvent-ad5f3.appspot.com",
		  messagingSenderId: "138134134759",
		  appId: "1:138134134759:web:0ef601f6a24715c7bce742",
		  measurementId: "G-RJDRPY53Y8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const submitButton = document.getElementById("login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
               
var email, password;

submitButton.addEventListener("click", function() {
  email = emailInput.value;
  console.log(email);
  password = passwordInput.value;
  console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Success! Welcome back!");
      window.alert("Success! Welcome back!");

      window.location.href = "../pages/dashboard.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred. Try again.");
      window.alert("Error occurred. Try again.");
    });
});

