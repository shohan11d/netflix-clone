import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import { getFirestore } from "firebase/firestore";

import { setDoc, doc, serverTimestamp } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEFXxTIABadtBN6MsxUeHgKPqoX-5-daE",
  authDomain: "netflix-clone-7e826.firebaseapp.com",
  projectId: "netflix-clone-7e826",
  storageBucket: "netflix-clone-7e826.firebasestorage.app",
  messagingSenderId: "685487104797",
  appId: "1:685487104797:web:650279eb16151a9cc7f7f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Authentication functions
export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged in successfully");
    return { success: true };
  } catch (error) {
    toast.error(error.message);
    return { success: false, error: error.message };
  }
};

export const signup = async (name, email, password) => {
  console.log(name, email, password);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      email,
      createdAt: serverTimestamp(),
    });


    toast.success("Signed up successfully");
    return { success: true };
  } catch (error) {
    toast.error(error.message);
    return { success: false, error: error.message };
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logged out successfully");
    return { success: true };
  } catch (error) {
    toast.error(error.message);
    return { success: false, error: error.message };
  }
};
