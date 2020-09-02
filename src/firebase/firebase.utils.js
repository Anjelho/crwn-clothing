import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDicx07k5WXSOwtSpmnRF3_PpOR2u_lxVc",
    authDomain: "crwn-clothing-827fd.firebaseapp.com",
    databaseURL: "https://crwn-clothing-827fd.firebaseio.com",
    projectId: "crwn-clothing-827fd",
    storageBucket: "crwn-clothing-827fd.appspot.com",
    messagingSenderId: "769933635038",
    appId: "1:769933635038:web:769006e383e09cbbda414f",
    measurementId: "G-XPG7TCQ0QH"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
  
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;