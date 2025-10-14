import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
  // user state
  const [user, setUser] = useState({});

  // google login
  const googleAuthentication = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //github auth/login
  const githubAuthentication = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // user tracking
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  // user logout

  const logOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
      });
  };

  const userInfo = {
    googleAuthentication,
    githubAuthentication,
    logOut,
    user,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
