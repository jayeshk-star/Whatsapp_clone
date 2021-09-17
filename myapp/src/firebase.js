import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage"
import "firebase/database"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB3qppq3o8Fc6dWs8OnPSYe598RgENywhQ",
    authDomain: "whatsapp-clone-2012f.firebaseapp.com",
    projectId: "whatsapp-clone-2012f",
    storageBucket: "whatsapp-clone-2012f.appspot.com",
    messagingSenderId: "1080100005130",
    appId: "1:1080100005130:web:8991bfa70bb934a146c6f3"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.store()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()

  export {auth,provider}
  export default db