import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
const firebaseConfig = {
  apiKey: "AIzaSyAzI7550JwBAVybMcrjOwg4ZZyyGC_bsk4",
  authDomain: "scalar-ffc32.firebaseapp.com",
  projectId: "scalar-ffc32",
  storageBucket: "scalar-ffc32.appspot.com",
  messagingSenderId: "497901956846",
  appId: "1:497901956846:web:16db95eae36c59d54dcdff",
  measurementId: "G-40G02XSYZL"
};

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();