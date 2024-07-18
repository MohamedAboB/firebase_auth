// import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCvzI3EWOAMfpytMOvNHvj0ulMGX2h_rCo",
  authDomain: "fir-auth-fbcd6.firebaseapp.com",
  projectId: "fir-auth-fbcd6",
  storageBucket: "fir-auth-fbcd6.appspot.com",
  messagingSenderId: "56389601286",
  appId: "1:56389601286:web:b297de32937c84323f1b87",
  measurementId: "G-71DB6JGT40"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export default app

const analytics = getAnalytics(app);

