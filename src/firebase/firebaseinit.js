import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyANdj4avhqBsoebwGPvC5mK19IMgWoiUDQ",
    authDomain: "meetingapp-2124e.firebaseapp.com",
    projectId: "meetingapp-2124e",
    storageBucket: "meetingapp-2124e.appspot.com",
    messagingSenderId: "119738375835",
    appId: "1:119738375835:web:a8620a8d615c427351303e",
    measurementId: "G-RDFPL262DV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timeStamp = firebase.firestore.Fieldvalue.serverTimestamp;

  export { timeStamp };
  export default firebaseApp.firestore();