
import { initializeApp } from "firebase/app";
import {  
  getAuth,  
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged  
 } from 'firebase/auth'

 import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDeSZ5saQrDJ16_CbaE27q7-26Nc3k6Vcw",
  authDomain: "canyons-log.firebaseapp.com",
  projectId: "canyons-log",
  storageBucket: "canyons-log.appspot.com",
  messagingSenderId: "316675361382",
  appId: "1:316675361382:web:ba844986708c4610487ba7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Instantiate the auth and database from Firebase according to the config
const auth = getAuth(app);
const db = getFirestore();

// Create as many according to the methods in Firebase
const google = new GoogleAuthProvider();

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, google);

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  // create a user document reference
  const userDocRef = doc(db, 'users', userAuth.uid);
  // create a user snapshot to validate if exists already or not
  const userSnapshot = await getDoc(userDocRef);
  
  // if user data doesnt exist
  // create / set document with the data from userAuth in my Firebase collection
  if (!userSnapshot.exists()) {
    // abstract user object values
    const { displayName, email } = userAuth;
    // date of record creation
    const createAt = new Date();
    // use setDoc on the 
    try {
      await setDoc(userDocRef, { 
        displayName,
        email,
        createAt,
        ...additionalInfo
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  // if user exists, return the user doc reference
  return userDocRef;  
}

export const redirectResponse = async () => {
  const redirectResult = await getRedirectResult(auth)
  if (!redirectResult) {
    return
  }
  try {
    const userSnapshot = redirectResult.user;
    return userSnapshot
  } catch (e) {
    console.log(e);
  }
}

export const signOutUser = async () => {
  await signOut(auth)
  try {
    return
  } catch (e) {
    console.log(e.code);
  }
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

