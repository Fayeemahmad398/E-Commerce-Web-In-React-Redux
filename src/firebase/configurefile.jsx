import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE_8iHhZaGj1tDJM7fuN4qLE-RswY7PIs",
  authDomain: "e-commerce-web-3452f.firebaseapp.com",
  projectId: "e-commerce-web-3452f",
  storageBucket: "e-commerce-web-3452f.appspot.com",
  messagingSenderId: "910703430414",
  appId: "1:910703430414:web:cc7b897db6e408cc8d255f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db =
export const auth = getAuth(app);
