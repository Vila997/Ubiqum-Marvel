var firebase = require("firebase/app");

// Add additional services that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

///////////
var firebaseConfig = {
  apiKey: "AIzaSyCoqR9jPGCndJ-OpL-kt7HYFvuWu_SjE6Y",
  authDomain: "marvel-d07ba.firebaseapp.com",
  databaseURL: "https://marvel-d07ba.firebaseio.com",
  projectId: "marvel-d07ba",
  storageBucket: "marvel-d07ba.appspot.com",
  messagingSenderId: "597848649122",
  appId: "1:597848649122:web:8cbcb41448a11697"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, db, auth, storage };
