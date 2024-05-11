import {auth} from './firebase'

import { createUserWithEmailAndPassword,
        GoogleAuthProvider,
        signInWithEmailAndPassword,
        sendEmailVerification} from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = async (email, password)=>{
    return  createUserWithEmailAndPassword(auth, email, password)
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  

export const doSignInWithGoogle = async () =>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // result.user
    return result
};

export const doSignOut = () => {
    return auth.signOut();
};

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, {
        url:`${window.location.origin}/home`,
    });
};