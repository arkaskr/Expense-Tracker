// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmx2jwzFtRtISK8jMvsdaYTbvEv84z0iU",
  authDomain: "expense-tracker-1c78d.firebaseapp.com",
  projectId: "expense-tracker-1c78d",
  storageBucket: "expense-tracker-1c78d.firebasestorage.app",
  messagingSenderId: "547088244226",
  appId: "1:547088244226:web:06ad472b92569eaef1d11b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);