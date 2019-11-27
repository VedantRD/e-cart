import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCeOzDygWMPy1PRZQ2ZC0q1sbIk68Ux-So",
    authDomain: "practice-e0082.firebaseapp.com",
    databaseURL: "https://practice-e0082.firebaseio.com",
    projectId: "practice-e0082",
    storageBucket: "practice-e0082.appspot.com",
    messagingSenderId: "797767759759",
    appId: "1:797767759759:web:180c680f7b25c99bf2bdfa",
    measurementId: "G-VV5B4W5NM3"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;