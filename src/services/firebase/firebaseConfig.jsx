// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJfO3r_JpV2rtZw_4Y0fAfHlCbfDytBUw",
  authDomain: "proyectofinal-alonsonovillo.firebaseapp.com",
  projectId: "proyectofinal-alonsonovillo",
  storageBucket: "proyectofinal-alonsonovillo.appspot.com",
  messagingSenderId: "714268768596",
  appId: "1:714268768596:web:ab065e4a6d30c37059f0c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)