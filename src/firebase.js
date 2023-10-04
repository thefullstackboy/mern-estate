// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-93782.firebaseapp.com",
  projectId: "mern-estate-93782",
  storageBucket: "mern-estate-93782.appspot.com",
  messagingSenderId: "1064323727391",
  appId: "1:1064323727391:web:72128f58aaf8724553552a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);