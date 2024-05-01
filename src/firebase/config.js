import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyBeYVdS3iIJKOOpa0WQwSoL5Zw_2DEp5F4",
  authDomain: "ed-eureka.firebaseapp.com",
  databaseURL: "https://ed-eureka-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ed-eureka",
  storageBucket: "ed-eureka.appspot.com",
  messagingSenderId: "1027470313445",
  appId: "1:1027470313445:web:153c68920a4946546ad10c",
  measurementId: "G-FVZGW8BTRW"
};
  // init firebase app
  firebase.initializeApp(firebaseConfig)

  // init firestore
  const projectFirestore = firebase.firestore()
  const projectStorage = firebase.storage()
  // const projectAuth = firebase.auth()
  

  export { projectFirestore,projectStorage }