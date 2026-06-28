// src/firebase.js
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile 
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDuaN2Cyt7N1wrFwnYaQ3GTjEuTFi8wT04",
  authDomain: "jengo-d3450.firebaseapp.com",
  projectId: "jengo-d3450",
  storageBucket: "jengo-d3450.firebasestorage.app",
  messagingSenderId: "425982704567",
  appId: "1:425982704567:web:bf70e1dd2b29b4bca60632",
  measurementId: "G-WY805SSS9P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export everything needed
export { 
  auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile 
};

