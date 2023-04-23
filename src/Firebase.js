import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAy2eTWUpH31-nFSiLQS04TyKiViaWWxqk",
  authDomain: "atividadesomativa2.firebaseapp.com",
  projectId: "atividadesomativa2",
  storageBucket: "atividadesomativa2.appspot.com",
  messagingSenderId: "237452881107",
  appId: "1:237452881107:web:cde1c9dece6e5bda697826"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;