// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfA_Cg-NkJgRZd3KPPB0-iNFx2DWJAfUk",
    authDomain: "doctors-portal-zr.firebaseapp.com",
    projectId: "doctors-portal-zr",
    storageBucket: "doctors-portal-zr.appspot.com",
    messagingSenderId: "191184068002",
    appId: "1:191184068002:web:4717d924ea90a8a550e6fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth; 