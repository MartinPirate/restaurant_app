import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB2On1pbHFRBkiMrZ664e_pYnKr_5I8i7Y",
    authDomain: "restaurant-app-3b734.firebaseapp.com",
    databaseURL: "https://restaurant-app-3b734-default-rtdb.firebaseio.com",
    projectId: "restaurant-app-3b734",
    storageBucket: "restaurant-app-3b734.appspot.com",
    messagingSenderId: "289086005807",
    appId: "1:289086005807:web:6aa9fd905d8089c6885cda"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app)


export {app, firestore, storage};
