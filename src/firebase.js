// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgLwUMbMR0PmhqKSAsuuPpiv0HWSKWYUg",
  authDomain: "vgallery-44670.firebaseapp.com",
  projectId: "vgallery-44670",
  storageBucket: "vgallery-44670.appspot.com",
  messagingSenderId: "1012676332149",
  appId: "1:1012676332149:web:2cd177a86156da29c2463c",
  measurementId: "G-GCL0EMSS47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);