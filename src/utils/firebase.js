import firebase from 'firebase/compat';
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCruJtEV81RSqO6-9jFuytRpIuWbPFa8ss",
    authDomain: "netflix-clone-2412b.firebaseapp.com",
    projectId: "netflix-clone-2412b",
    storageBucket: "netflix-clone-2412b.appspot.com",
    messagingSenderId: "280158033075",
    appId: "1:280158033075:web:2c0b32e11552fa00290cc6"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;