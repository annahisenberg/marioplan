 import firebase from 'firebase/app'
 import 'firebase/firestore' 
 import 'firebase/auth'
 
 var firebaseConfig = {
    apiKey: "AIzaSyCM9-aujQHtoFo-5YZM9bWvxqOwVnMNJ0s",
    authDomain: "marioplan-c1116.firebaseapp.com",
    databaseURL: "https://marioplan-c1116.firebaseio.com",
    projectId: "marioplan-c1116",
    storageBucket: "",
    messagingSenderId: "615908866892",
    appId: "1:615908866892:web:97f9c6f4b96ec1e4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;