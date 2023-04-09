// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaL2m6vcPej-fI7hF7Y1T4LD2SMIwhYMg",
  authDomain: "pln-reksti.firebaseapp.com",
  databaseURL: "https://pln-reksti-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pln-reksti",
  storageBucket: "pln-reksti.appspot.com",
  messagingSenderId: "340226970797",
  appId: "1:340226970797:web:7d45d89e3ca51675b4e224",
  measurementId: "G-QFQ08NSKT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, onValue} from "firebase/database";

export const attachDataListener1 = (setData1: (data: string) => void) => {
  const db = getDatabase();
  const starCountRef = ref(db, '/');
  
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data.data);
    setData1(data.engine1.data);
  });
};

export const attachDataListener2 = (setData2: (data: string) => void) => {
  const db = getDatabase();
  const starCountRef = ref(db, '/');
  
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data.data);
    setData2(data.engine2.data);
  });
};
