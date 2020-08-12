import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "some-api-key",
  authDomain: "some-api-key.firebaseapp.com",
  databaseURL: "https://some-api-key.firebaseio.com",
  projectId: "some-api-key",
  storageBucket: "some-api-key.appspot.com",
  messagingSenderId: "some-api-key",
  appId: "some-api-key:some-api-key:web:some-api-key"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
