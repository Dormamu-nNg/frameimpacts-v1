import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNPE6e3M2ASjtAnmpszzj8hK1avC9iuAk",
  authDomain: "frameimpacts-c9f47.firebaseapp.com",
  projectId: "frameimpacts-c9f47",
  storageBucket: "frameimpacts-c9f47.appspot.com",
  messagingSenderId: "650999935684",
  appId: "1:650999935684:web:e918ef85d56764d4ee0f91",
  measurementId: "G-0P6G3T0RNX",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
