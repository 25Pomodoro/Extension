// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNGYO1E6NZWLUg7vJ87MOELhjGG4NIINM",
  authDomain: "pomodoro-f6d22.firebaseapp.com",
  databaseURL: "https://pomodoro-f6d22-default-rtdb.firebaseio.com",
  projectId: "pomodoro-f6d22",
  storageBucket: "pomodoro-f6d22.appspot.com",
  messagingSenderId: "252101399850",
  appId: "1:252101399850:web:bae048f24495b784b9fa53",
  measurementId: "G-BWR19MNT9F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
