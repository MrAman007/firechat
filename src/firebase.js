import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDLq-7G9gUsULipyQWCodS1pe9hcHhb15w",
    authDomain: "firechat-a14db.firebaseapp.com",
    projectId: "firechat-a14db",
    storageBucket: "firechat-a14db.appspot.com",
    messagingSenderId: "969702736623",
    appId: "1:969702736623:web:37a79edb4c89f0b1b2111a",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
