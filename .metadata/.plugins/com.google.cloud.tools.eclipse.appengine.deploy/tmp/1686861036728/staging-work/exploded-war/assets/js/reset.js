import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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
const auth = getAuth(app);

const resetEmailInput = document.getElementById("reset-email");
const resetSubmitButton = document.getElementById("reset-submit");

resetSubmitButton.addEventListener("click", function () {
  const resetEmail = resetEmailInput.value;
  
  sendPasswordResetEmail(auth, resetEmail)
    .then(() => {
      window.alert("Password reset email sent. Check your inbox.");
      resetEmailInput.value = ""; // Clear the input field
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred. Try again.");
      window.alert("Error occurred. Try again.");
    });
});
