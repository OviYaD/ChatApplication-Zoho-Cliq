import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,signInWithPopup,getAuth} from "firebase/auth";
import {getFirestore,query,collection,where,getDocs,addDoc} from "firebase/firestore";
import { getMessaging,getToken } from "firebase/messaging";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "prezz-c204b.firebaseapp.com",
  projectId: "prezz-c204b",
  storageBucket: "prezz-c204b.appspot.com",
  messagingSenderId: "726282553313",
  appId: "1:726282553313:web:6121c3479208a618dab4a0",
  measurementId: "G-ZJBHCNC5ZG"
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
// messaging.getToken(messaging, {vapidKey: "BPFrLpzCHsQmVAGZz7rtkIa5T0Pvbbn84wq_yGPS1wVOZHxXz30X5ac-E9Qx1Cza-2wwJNDJtg0NBrtVVVXoX5o"});

const auth = getAuth(app);
const db = getFirestore(app);

export function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      getToken(messaging, {vapidKey: process.env.REACT_APP_FIREBASE_VAPIDKEY}).then((currentToken) => {
      if (currentToken) {
        console.log("current token",currentToken);
        localStorage.setItem("$%^&*(*&^%$#@#$%^&*()n(*(*otify(*&&*(t(*&*(oken)(*&^&*(",currentToken)
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
    }
    else{
      console.log('no grant');
    }
  })
  
}

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  console.log("signin with gogle")
  try {
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res._tokenResponse.idToken);
    return res._tokenResponse.idToken
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};