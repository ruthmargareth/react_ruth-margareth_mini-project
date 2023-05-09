// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLSjFQTTD0mHkxocRDdgsDeCbK8X-8vD0",
  authDomain: "woofgang-fb35e.firebaseapp.com",
  projectId: "woofgang-fb35e",
  storageBucket: "woofgang-fb35e.appspot.com",
  messagingSenderId: "264802478216",
  appId: "1:264802478216:web:8c15a6562471ccde4f573d",
  measurementId: "G-WF0V0NRH7T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
