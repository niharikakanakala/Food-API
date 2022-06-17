import { createContext, useEffect, useState } from "react";

import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

//the actual value we will access ,means the external storage thing that we want to access for all our profile or homepage or etc;
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//provider is a component which we wraps it where we want
//children is what we wrap in that provider
//so we use this provider in usercontext and set that value to null
//if we
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      //unsubscribe means if we dont have any user
      if (user) {
        createUserDocumentFromAuth(user); //for google popup method
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
