// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8i7XrONQq10sn25sA_NWXO0TRLVETYeA",
  authDomain: "my-firebase-6028e.firebaseapp.com",
  projectId: "my-firebase-6028e",
  storageBucket: "my-firebase-6028e.appspot.com", 
  messagingSenderId: "288272374648",
  appId: "1:288272374648:web:b519403a231360f37d468d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
