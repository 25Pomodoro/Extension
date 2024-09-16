import { initializeApp } from "firebase/app";

function init_firebase() {
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

  return initializeApp(firebaseConfig);
}

export default init_firebase;
