
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyAhWbpYJ0Dg_PLExVU20u5eocH9xp_Gc-A",
  authDomain: "blognxt-3e94b.firebaseapp.com",
  projectId: "blognxt-3e94b",
  storageBucket: "blognxt-3e94b.appspot.com",
  messagingSenderId: "862940679165",
  appId: "1:862940679165:web:dd6b5c4e7946bf34fde794"
};


if(!firebase.getApps.length){
    firebase.initializeApp(firebaseConfig)
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
