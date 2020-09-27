import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD3fNe8OMy0nexsG1ovfH_sHVbBpH5kPHU",
    authDomain: "project-interviewer.firebaseapp.com",
    databaseURL: "https://project-interviewer.firebaseio.com",
    projectId: "project-interviewer",
    storageBucket: "project-interviewer.appspot.com",
    messagingSenderId: "735777386509",
    appId: "1:735777386509:web:312b02ff0c4fa807a62544",
    measurementId: "G-Y6KM46L0ND"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
