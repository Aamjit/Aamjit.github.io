import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBqZzIHAL8RlCS_aC6CJ36HbTnPhRZUg7k",
  authDomain: "portfolio-feedbacks.firebaseapp.com",
  projectId: "portfolio-feedbacks",
  storageBucket: "portfolio-feedbacks.appspot.com",
  messagingSenderId: "498074443782",
  appId: "1:498074443782:web:7a594795033c135e4ae387",
  measurementId: "G-F48QGS50EY"
};
// Initialize Firebase
var firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var db = firebaseApp.firestore();

export { db };
