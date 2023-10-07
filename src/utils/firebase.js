// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnUITBKHDDbiPgU28HKcueggXgsiX7EhY",
  authDomain: "movieai-fe975.firebaseapp.com",
  projectId: "movieai-fe975",
  storageBucket: "movieai-fe975.appspot.com",
  messagingSenderId: "301436251532",
  appId: "1:301436251532:web:23144057aabf9aeeae7aa9",
  measurementId: "G-FX60SSLR5T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
