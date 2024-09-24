// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // Because we are using VITE instead of create-react-app, we use import.meta isntead
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "brews-books.firebaseapp.com",
  projectId: "brews-books",
  storageBucket: "brews-books.appspot.com",
  messagingSenderId: "269511194916",
  appId: "1:269511194916:web:2ee992e669698b93d09bb1",
  measurementId: "G-RHYW3PYC1Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);