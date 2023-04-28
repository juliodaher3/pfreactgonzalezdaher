// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";






const firebaseConfig = {
  apiKey: "AIzaSyBxucA3WNQev0OfPmdBtDgLomEikQJ2VmY",
  authDomain: "pfreactgonzalezdaher.firebaseapp.com",
  projectId: "pfreactgonzalezdaher",
  storageBucket: "pfreactgonzalezdaher.appspot.com",
  messagingSenderId: "1086572073954",
  appId: "1:1086572073954:web:86997991b8b48c005fdfbb"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);