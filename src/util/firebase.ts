// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaL2m6vcPej-fI7hF7Y1T4LD2SMIwhYMg",
  authDomain: "pln-reksti.firebaseapp.com",
  databaseURL:
    "https://pln-reksti-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pln-reksti",
  storageBucket: "pln-reksti.appspot.com",
  messagingSenderId: "340226970797",
  appId: "1:340226970797:web:7d45d89e3ca51675b4e224",
  measurementId: "G-QFQ08NSKT3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore()
const provider = new GoogleAuthProvider();

import { getDatabase, ref, onValue } from "firebase/database";

type DataType = {
  data: string;
  timestamp: string;
  next_maintenance: number;
};

type MaintenanceDate = {
  boiler : number,
  sootblower : number
}


export const attachDataListener = (engine : string,setData: (data: DataType) => void, setListData: (list: DataType[]) => void, list:DataType[], setMaintenanceDate: (maintenanceDate : MaintenanceDate) => void) => {
  const db = getDatabase();
  const starCountRef = ref(db, "/");

  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();

    if (engine === "Sootblower") {
      setData(data.engine1);
      list.push(data.engine1)
    } else {
      setData(data.engine2);
      list.push(data.engine2)
    }

    setListData(list)
    setMaintenanceDate(data.next_maintenance)
  });
};

export { app, auth, provider, firestore }
