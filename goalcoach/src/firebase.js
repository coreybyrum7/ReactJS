import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAqEsaOcXAbo0RDGOPdPs7nqJph1qe27MM",
    authDomain: "goalcoach-5bccf.firebaseapp.com",
    databaseURL: "https://goalcoach-5bccf.firebaseio.com",
    projectId: "goalcoach-5bccf",
    storageBucket: "goalcoach-5bccf.appspot.com",
    messagingSenderId: "903376596973"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
