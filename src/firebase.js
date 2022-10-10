import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCdHV4_T1nJ243OPOcEwgDcYD0HOcMouEk",
  authDomain: "kmq-assessment.firebaseapp.com",
  databaseURL: "https://kmq-assessment-default-rtdb.firebaseio.com",
  projectId: "kmq-assessment",
  storageBucket: "kmq-assessment.appspot.com",
  messagingSenderId: "206503803137",
  appId: "1:206503803137:web:2e03955dada58e9bc04300"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;