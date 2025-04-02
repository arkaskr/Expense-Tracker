// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeBSI4_tTJ9jlPQcTBmG6jKdKrbwawIXs",
  authDomain: "expensify-e590a.firebaseapp.com",
  projectId: "expensify-e590a",
  storageBucket: "expensify-e590a.firebasestorage.app",
  messagingSenderId: "389106263662",
  appId: "1:389106263662:web:41826e455510752f15e87f",
  measurementId: "G-EWP9PBQVG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
