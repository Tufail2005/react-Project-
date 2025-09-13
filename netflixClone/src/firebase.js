
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyD07khD_UJocG9DnYgUSV_XIFY1Nk1-W0I",
  authDomain: "netflixclone-2f25d.firebaseapp.com",
  projectId: "netflixclone-2f25d",
  storageBucket: "netflixclone-2f25d.firebasestorage.app",
  messagingSenderId: "786819500116",
  appId: "1:786819500116:web:8589dcedf60fb84a1f45c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
       
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authPrivider: "local",
        email,
      })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
        
    }
}

const login = async (email, password)=>{
    try {
      await  signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
        
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};




