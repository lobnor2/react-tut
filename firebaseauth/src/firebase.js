import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWDv-jxWz3kk0qWcENifBeMdASE8vzU78",
  authDomain: "fir-auth-32ccb.firebaseapp.com",
  projectId: "fir-auth-32ccb",
  storageBucket: "fir-auth-32ccb.appspot.com",
  messagingSenderId: "429610884131",
  appId: "1:429610884131:web:dcdb13c04a606e92086596",
  measurementId: "G-MJR6RHZCH9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);
