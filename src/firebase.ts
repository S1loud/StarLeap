import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-jyXCD6jsGmy1XrqrFVCC9MiCWz6ZWcU",
  authDomain: "starleap.firebaseapp.com",
  projectId: "starleap",
  storageBucket: "starleap.firebasestorage.app",
  messagingSenderId: "426027546334",
  appId: "1:426027546334:web:04eadb139b67d546eab44f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);