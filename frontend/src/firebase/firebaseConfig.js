import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyBNwsNhgWIOiDLblson_y_z0wqx-JohX2I",
    authDomain: "stripe-subscription-a006d.firebaseapp.com",
    projectId: "stripe-subscription-a006d",
    storageBucket: "stripe-subscription-a006d.appspot.com",
    messagingSenderId: "101982593568",
    appId: "1:101982593568:web:a5bbb6210cb7cb34541245",
    measurementId: "G-PD5RTLJ3WW"
  };
  

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase