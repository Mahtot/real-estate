import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPQVIUKAaKyBbBPb-Jm8P74_F1VSPqvaU",
  authDomain: "auth-development-2630a.firebaseapp.com",
  projectId: "auth-development-2630a",
  storageBucket: "auth-development-2630a.appspot.com",
  messagingSenderId: "650903981970",
  appId: "1:650903981970:web:2833b1dc5645b93194bb4b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}