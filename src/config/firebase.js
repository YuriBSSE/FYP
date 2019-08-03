import firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyAoEIwb1s5mgxmSIxMQfdT0hiOVxjWDdkw",
    authDomain: "studyhub12345.firebaseapp.com",
    databaseURL: "https://studyhub12345.firebaseio.com",
    projectId: "studyhub12345",
    storageBucket: "studyhub12345.appspot.com",
    messagingSenderId: "531932423417"
    // authDomain: "fyp-565c7.firebaseapp.com",
    // apiKey: "AIzaSyBqc5ornr1fi2PYA-fAQ6dbmqzw9m_Ms-A",
    // databaseURL: "https://fyp-565c7.firebaseio.com",
    // projectId: "fyp-565c7",
    // storageBucket: "",
    // messagingSenderId: "311635442162",
    // appId: "1:311635442162:web:e721ee29b1e62805"
  };

const firebaseApi = firebase.initializeApp(config);

export default firebaseApi;
