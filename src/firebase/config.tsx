// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyACVkCeV5cJVi1Wqj6zcTo6DGezSuND9MA",
  authDomain: "miniblog-c8e3d.firebaseapp.com",
  projectId: "miniblog-c8e3d",
  storageBucket: "miniblog-c8e3d.appspot.com",
  messagingSenderId: "635734251657",
  appId: "1:635734251657:web:c43f107044e812b1e98e58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export  {db};