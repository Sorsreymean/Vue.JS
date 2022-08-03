import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDauxvdtJzpJaBoBwNN7jYS_bFJw7GCzQA",
    authDomain: "vuex-4-fb-auth-931b5.firebaseapp.com",
    projectId: "vuex-4-fb-auth-931b5",
    storageBucket: "vuex-4-fb-auth-931b5.appspot.com",
    messagingSenderId: "538298635754",
    appId: "1:538298635754:web:aeba460c22f2016a730e93",
    measurementId: "G-WTN04R8PJC"
};
//init firebase
initializeApp(firebaseConfig)
//init firebase auth
const auth = getAuth()
export {auth}