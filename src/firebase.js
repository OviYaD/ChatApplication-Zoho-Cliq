import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,signInWithPopup,getAuth} from "firebase/auth";
import {getFirestore,query,collection,where,getDocs,addDoc} from "firebase/firestore";
import { getMessaging,getToken } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyCMB3Vfvz_XZUs57GKFrs0DVa6oAI_u5PA",
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
      getToken(messaging, {vapidKey: "BPFrLpzCHsQmVAGZz7rtkIa5T0Pvbbn84wq_yGPS1wVOZHxXz30X5ac-E9Qx1Cza-2wwJNDJtg0NBrtVVVXoX5o"}).then((currentToken) => {
      if (currentToken) {
        console.log("current token",currentToken);
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
  try {
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res.user.accessToken  );
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCMB3Vfvz_XZUs57GKFrs0DVa6oAI_u5PA",
//   authDomain: "prezz-c204b.firebaseapp.com",
//   projectId: "prezz-c204b",
//   storageBucket: "prezz-c204b.appspot.com",
//   messagingSenderId: "726282553313",
//   appId: "1:726282553313:web:6121c3479208a618dab4a0",
//   measurementId: "G-ZJBHCNC5ZG"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// npm install firebase
// npm install -g firebase-tools