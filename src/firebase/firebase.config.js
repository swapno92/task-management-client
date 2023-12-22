// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCwFVX8WM5V2ZnLIAew2aBf2jeuEj8vRw",
  authDomain: "task-management-d57b5.firebaseapp.com",
  projectId: "task-management-d57b5",
  storageBucket: "task-management-d57b5.appspot.com",
  messagingSenderId: "777359016324",
  appId: "1:777359016324:web:f2581793def7ac306e5dd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;