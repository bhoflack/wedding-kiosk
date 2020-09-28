import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDsIYInoD7nOUbAaXuka7_pD0c_zoniXaI",
    authDomain: "kiosk-290416.firebaseapp.com",
    databaseURL: "https://kiosk-290416.firebaseio.com",
    projectId: "kiosk-290416",
    storageBucket: "kiosk-290416.appspot.com",
    messagingSenderId: "194505412930",
    appId: "1:194505412930:web:0e5e8a4182ea93341e38db"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const processed = db.collection('processed')

export {
    db,
    processed,
}