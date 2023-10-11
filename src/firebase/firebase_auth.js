// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATge-5FFDPSZul2abRJo2GPRtc7uXboW4",
  authDomain: "miecommers-5e6a7.firebaseapp.com",
  projectId: "miecommers-5e6a7",
  storageBucket: "miecommers-5e6a7.appspot.com",
  messagingSenderId: "183307493831",
  appId: "1:183307493831:web:b4cc07f889a67e49d879e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);





