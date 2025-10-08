// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' 
import { getAuth } from  'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "#####",
  authDomain: "shopopedia-1bfbd.firebaseapp.com",
  projectId: "shopopedia-1bfbd",
  storageBucket: "shopopedia-1bfbd.firebasestorage.app",
  messagingSenderId: "490898995173",
  appId: "1:490898995173:web:1eed5ec20437b9571fa10c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export { app as firebaseApp, db, auth }
