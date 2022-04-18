// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4pe8f2AVca5N-ShnYv5uOo6coPUh-ckw",
  authDomain: "on-the-way-f4693.firebaseapp.com",
  projectId: "on-the-way-f4693",
  storageBucket: "on-the-way-f4693.appspot.com",
  messagingSenderId: "1064348761395",
  appId: "1:1064348761395:web:c3077fd0f5ff01d7651246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 