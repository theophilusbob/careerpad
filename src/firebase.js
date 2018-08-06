import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAmxePxtLHRPoZ7b9_kf9nO-xr2pcSmD1o",
  authDomain: "careerpad-c5a08.firebaseapp.com",
  databaseURL: "https://careerpad-c5a08.firebaseio.com",
  projectId: "careerpad-c5a08",
  storageBucket: "careerpad-c5a08.appspot.com",
  messagingSenderId: "436573180757"
};
firebase.initializeApp(config);
  export default firebase;