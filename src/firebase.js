import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCJpWoYvUW3H14JxGPOBo4g_VufhkKJPig",
    authDomain: "careerpad-4d3e0.firebaseapp.com",
    databaseURL: "https://careerpad-4d3e0.firebaseio.com",
    projectId: "careerpad-4d3e0",
    storageBucket: "careerpad-4d3e0.appspot.com",
    messagingSenderId: "331214802898"
  };
  firebase.initializeApp(config);
  export default firebase;