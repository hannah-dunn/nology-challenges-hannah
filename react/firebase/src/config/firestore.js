// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const apiKey = import.meta.env.VITE_FIRESTORE_API;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "hannah-nology.firebaseapp.com",
  projectId: "hannah-nology",
  storageBucket: "hannah-nology.appspot.com",
  messagingSenderId: "311750448250",
  appId: "1:311750448250:web:56024ca5aa3dc31c01d7c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
