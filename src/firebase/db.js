import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance


var firebaseConfig = {
  apiKey: "AIzaSyD2CMY4KTEel6nzZSy2EG4HhrO9WYQib6g",
  authDomain: "gurumintcom-282c4.firebaseapp.com",
  projectId: "gurumintcom-282c4",
  storageBucket: "gurumintcom-282c4.appspot.com",
  messagingSenderId: "568730566652",
  appId: "1:568730566652:web:925cd099d62e31e87dfc79",
  measurementId: "G-XCLWL9LBHL"
  };
 

export const db = firebase.initializeApp(firebaseConfig).firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
