import firebase from 'firebase';

// adicione SDK do Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdEQarkomy2YVW6C-sCR5EIQ6uB0_uLzc",
  authDomain: "pro-67-594c4.firebaseapp.com",
  databaseURL: "https://pro-67-594c4-default-rtdb.firebaseio.com",
  projectId: "pro-67-594c4",
  storageBucket: "pro-67-594c4.appspot.com",
  messagingSenderId: "1034617485560",
  appId: "1:1034617485560:web:939853eeb536c9c762630d"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
