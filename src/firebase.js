import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDa9QHsllBcuNHMKryyhXN77EANFdSfEFo",
  authDomain: "movie-app-ce545.firebaseapp.com",
  projectId: "movie-app-ce545",
  storageBucket: "movie-app-ce545.appspot.com",
  messagingSenderId: "1032383619169",
  appId: "1:1032383619169:web:af842889d20314738f4a20",
  measurementId: "G-G6FMXZ4NWX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
