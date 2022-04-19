import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkPwFVUl-v_7YJcqmCsqBhPhHka8PxBKs",
  authDomain: "assignment-ten-3f25b.firebaseapp.com",
  projectId: "assignment-ten-3f25b",
  storageBucket: "assignment-ten-3f25b.appspot.com",
  messagingSenderId: "745390427000",
  appId: "1:745390427000:web:bfad15f5d0c6d2e63f968d"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;