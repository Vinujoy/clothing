import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCAZGeTk2tS6cffboAFrXXwESgoxy-xO9o",
    authDomain: "crwn-db-638f3.firebaseapp.com",
    databaseURL: "https://crwn-db-638f3.firebaseio.com",
    projectId: "crwn-db-638f3",
    storageBucket: "crwn-db-638f3.appspot.com",
    messagingSenderId: "239580172371",
    appId: "1:239580172371:web:1b9ffd0a95bd58c452f6a6",
    measurementId: "G-MHBYE8BBMN"
};
firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle =()=> auth.signInWithPopup(provider);
export default firebase;