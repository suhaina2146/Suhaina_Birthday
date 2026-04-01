// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSXGCCHgiKHQeIxsrA5J0rLyAoOQZ52vw",
  authDomain: "labs-48a69.firebaseapp.com",
  projectId: "labs-48a69",
  storageBucket: "labs-48a69.firebasestorage.app",
  messagingSenderId: "619948653377",
  appId: "1:619948653377:web:ddea5848a8553fdcc57fc0",
  measurementId: "G-7EXCW99E3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
