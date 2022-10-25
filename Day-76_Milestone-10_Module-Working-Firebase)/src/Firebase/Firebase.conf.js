// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6sGDGSoroNpqcO1_IgWPoLsXr59sAQeY",
  authDomain: "eschool-3edac.firebaseapp.com",
  projectId: "eschool-3edac",
  storageBucket: "eschool-3edac.appspot.com",
  messagingSenderId: "285438290782",
  appId: "1:285438290782:web:19e02c1c6a26cd3a4dbdcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;