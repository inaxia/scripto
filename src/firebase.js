import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
// import { query, collection, getDocs, where } from "firebase/firestore";
// import { getDatabase } from "firebase/database";
import { v4 as uuid } from 'uuid';

// project-scripto
const firebaseConfig = {
  apiKey: "AIzaSyBjpIPC8OxMMqz88JBoYhe3qz8lRCviqEg",
  authDomain: "scriptoproject.firebaseapp.com",
  projectId: "scriptoproject",
  storageBucket: "scriptoproject.appspot.com",
  messagingSenderId: "795454254702",
  appId: "1:795454254702:web:d5ef3934bee7afdc33807f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const database = getDatabase(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
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

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};




const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

const addData = async (name, text) => {
  // const luid = uuid();
  const uid = uuid().slice(0,5);
  try {
    // const res = await createUserWithEmailAndPassword(auth);
    // const user = res.user;
    await addDoc(collection(db, "feed"), {
    uid: uid,
    name:name,
    // authProvider: "local",
    text:text,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
  };


export {
  auth,
  db,
  // database,
  addData,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
