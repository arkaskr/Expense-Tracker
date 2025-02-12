// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3rgX1-lpV-wxVgJ9a7faN6upOZ2J5GqU",
  authDomain: "expensify-6284b.firebaseapp.com",
  projectId: "expensify-6284b",
  storageBucket: "expensify-6284b.firebasestorage.app",
  messagingSenderId: "68638857143",
  appId: "1:68638857143:web:68bcd9f4d543d3e3617a32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);