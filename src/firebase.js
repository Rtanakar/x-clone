// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-clone-9d33e.firebaseapp.com",
  projectId: "x-clone-9d33e",
  storageBucket: "x-clone-9d33e.appspot.com",
  messagingSenderId: "192937085313",
  appId: "1:192937085313:web:371d9ac5cb4171be004080",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
