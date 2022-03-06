import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBpNZLSxi6lgSwf439bo1mzzrSh6yxfi6k",
  authDomain: "hikun-3ff3f.firebaseapp.com",
  projectId: "hikun-3ff3f",
  storageBucket: "hikun-3ff3f.appspot.com",
  messagingSenderId: "28209281395",
  appId: "1:28209281395:web:4c5691547022c4411b2d06",
  measurementId: "G-F6TRVFR7BS",
});
const db = getFirestore(firebaseApp);
export default db;
