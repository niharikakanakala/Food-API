// import { useEffect } from "react";
// import { getRedirectResult } from "@firebase/auth";

// import {
//   auth,
//   signInWithGooglePopup,
//   // signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";
import { SignUpForm } from "../../components/sign-up-form/sign-up-form.components";
import { SignInForm } from "../../components/sign-in-form/sign-in-form.components";

import "./authentication.styles.scss";

export const Authentication = () => {
  // useEffect(() => {
  //   async function mylogin() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   mylogin();
  // }, []);
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

// <button onClick={signInWithGoogleRedirect}>
// Signin With Google Redirect
// </button>
