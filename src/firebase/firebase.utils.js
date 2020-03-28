import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyAsdvXaeCcjU9p1OkoUKeJHbN2H2rkX5ko',
    authDomain: 'ecommerce-db-9fa5e.firebaseapp.com',
    databaseURL: 'https://ecommerce-db-9fa5e.firebaseio.com',
    projectId: 'ecommerce-db-9fa5e',
    storageBucket: 'ecommerce-db-9fa5e.appspot.com',
    messagingSenderId: '133962659139',
    appId: '1:133962659139:web:646b4d657b2340b9b8ebf6',
    measurementId: 'G-M6G0ZQPCGZ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
