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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    // query of the document reference object
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // get the snapshot object
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            // creates a new document
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error  creating user', error.message);
        }
    }
    return userRef;
};
// add items to Firestore
export const addCollectionsAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
    // to prevent partial save to the db, create a batch object
    const batch = firestore.batch();
    objectsToAdd.forEach((obj) => {
        // Firestore generates an unique id for each document
        const newDocRef = collectionRef.doc();
        // instead of call newDocRef.set
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((docSnapshot) => {
        const { title, items } = docSnapshot.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: docSnapshot.id,
            title,
            items,
        };
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
