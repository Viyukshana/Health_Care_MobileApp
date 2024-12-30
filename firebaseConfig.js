// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyvIeu41EWMsmYkh-FHiHC_3iDLEn3Tug",
  authDomain: "healthcare-f0a77.firebaseapp.com",
  projectId: "healthcare-f0a77",
  storageBucket: "healthcare-f0a77.firebasestorage.app",
  messagingSenderId: "346888246652",
  appId: "1:346888246652:web:34a331ed0d7ba05cc900f9",
  measurementId: "G-58ZWDMZCET"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get authentication service
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail };
export const firestore = getFirestore(app);