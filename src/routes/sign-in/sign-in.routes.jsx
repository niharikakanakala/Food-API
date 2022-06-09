// import { useEffect } from "react";
// import { getRedirectResult } from "@firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { SignUpForm } from "../../components/sign-up-form/sign-up-form.components";

export const SignIn = () => {
  // useEffect(() => {
  //   async function mylogin() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   mylogin();
  // }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Signin With Google Popup</button>
      <SignUpForm />
    </div>
  );
};

// <button onClick={signInWithGoogleRedirect}>
// Signin With Google Redirect
// </button>
