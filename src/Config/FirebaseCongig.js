// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAONJAe-HpJ8ZvPV8qanXY6VYl9jvUbBVw",
  authDomain: "todo-4c898.firebaseapp.com",
  projectId: "todo-4c898",
  storageBucket: "todo-4c898.appspot.com",
  messagingSenderId: "647158668577",
  appId: "1:647158668577:web:814700efcfa6221d637260",
  measurementId: "G-Y3N8KC4ZRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;