import * as firebase from "firebase";


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBQmLvZ9mnh1s2_gE4kQ39TVPj6b9QE_GA",
    authDomain: "ecommerce-ca120.firebaseapp.com",
    projectId: "ecommerce-ca120",
    storageBucket: "ecommerce-ca120.appspot.com",
    messagingSenderId: "1022684749833",
    appId: "1:1022684749833:web:07f77fb12bc93a8212d8d8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
