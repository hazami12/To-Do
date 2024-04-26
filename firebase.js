// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0jBuWXT0jC-Mjn7vJnZfOT4zBnal0oZ0",
  authDomain: "to-do-e730a.firebaseapp.com",
  databaseURL: "https://to-do-e730a-default-rtdb.firebaseio.com",
  projectId: "to-do-e730a",
  storageBucket: "to-do-e730a.appspot.com",
  messagingSenderId: "288394359531",
  appId: "1:288394359531:web:8f2cab54dd56a0a9ad84ae",
  measurementId: "G-RZ7QM34669"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} 
else {
  app = firebase.app()
}

const auth = firebase.auth();

export { auth };