// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy4GAYaFKKWHKHtO5hDW908CsTXP47D3M",
  authDomain: "thefirst-911ad.firebaseapp.com",
  projectId: "thefirst-911ad",
  storageBucket: "thefirst-911ad.appspot.com",
  messagingSenderId: "808034998778",
  appId: "1:808034998778:web:add2a94671417158aeac43",
  measurementId: "G-DKD4RW9J3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);