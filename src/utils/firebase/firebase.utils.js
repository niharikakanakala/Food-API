import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

//docs retreieve data from our firestore database.To se and get data we use getDoc and setDoc

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-HKZ4tJ6Kz6l0svWqxehnWfDGCtBIJ6I",
  authDomain: "food-app-3049b.firebaseapp.com",
  projectId: "food-app-3049b",
  storageBucket: "food-app-3049b.appspot.com",
  messagingSenderId: "599573961795",
  appId: "1:599573961795:web:112752f1b7d3213a4388f6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

//doc takes 3 args => db, user collection, and identifier like obj with unique id from an user that we get from database
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  //if user data exists
  //then return userdocref
  //if user data doesnot exist
  //then create or set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
