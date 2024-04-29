// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyAf_ylb-0FAvXn6S8TUC82rgEAY_0cEexQ",
  authDomain: "adv-exer7-72c19.firebaseapp.com",
  projectId: "adv-exer7-72c19",
  storageBucket: "adv-exer7-72c19.appspot.com",
  messagingSenderId: "159077183764",
  appId: "1:159077183764:web:9eef621da16a67694b9201"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
