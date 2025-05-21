import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALNjVsePXN5DVVzp_W6tijLlFzMcd4L3E",
  authDomain: "nwitter-reloaded-f0682.firebaseapp.com",
  projectId: "nwitter-reloaded-f0682",
  storageBucket: "nwitter-reloaded-f0682.firebasestorage.app",
  messagingSenderId: "241880022658",
  appId: "1:241880022658:web:76b4c7c249fdb64accbe9b",
  measurementId: "G-4LX8BP2D1Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);