// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "mern-blog-85c22.firebaseapp.com",
  projectId: "mern-blog-85c22",
  storageBucket: "mern-blog-85c22.appspot.com",
  messagingSenderId: "986741307960",
  appId: "1:986741307960:web:96a6f7978a75085959c4cd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);