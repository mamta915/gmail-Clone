// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyBdyuZoMAN6cJxL6COWxbuGR68iDFFJlMs",
  authDomain: "clone-yt-1c403.firebaseapp.com",
  projectId: "clone-yt-1c403",
  storageBucket: "clone-yt-1c403.appspot.com",
  messagingSenderId: "318809496389",
  appId: "1:318809496389:web:4d8d7201d12ddd43327c2c",
  measurementId: "G-ZFZQB2L598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
