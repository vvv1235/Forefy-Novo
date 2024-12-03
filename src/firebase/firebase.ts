// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getMessaging } from 'firebase/messaging/sw'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBBRNS0OkmH6xzEfhcSHA0_FDQUxPqhfLg",
  authDomain: "foresfy-eef94.firebaseapp.com",
  projectId: "foresfy-eef94",
  storageBucket: "foresfy-eef94.appspot.com",
  messagingSenderId: "813681513645",
  appId: "1:813681513645:web:1a38359c2b51572b21e224",
  measurementId: "G-K4ZGJZC2P8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
// const messaging = getMessaging(app);
