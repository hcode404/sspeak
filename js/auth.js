// js/auth.js

import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Anonymous Sign-In
export const signInAnonymously = async () => {
    try {
        const userCredential = await firebase.auth().signInAnonymously();
        console.log('Anonymous user signed in:', userCredential.user);
        return userCredential.user;
    } catch (error) {
        console.error('Error signing in anonymously:', error);
        throw error;
    }
};

// Google Sign-In
export const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        const userCredential = await firebase.auth().signInWithPopup(provider);
        console.log('Google user signed in:', userCredential.user);
        return userCredential.user;
    } catch (error) {
        console.error('Error signing in with Google:', error);
        throw error;
    }
};

// Export Auth Functions
export default { signInAnonymously, signInWithGoogle };