// auth.js
// Authentication functions using Firebase

// Anonymous Sign-In
const signInAnonymously = async () => {
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
const signInWithGoogle = async () => {
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

// Sign Out
const signOut = async () => {
    try {
        await firebase.auth().signOut();
        console.log('User signed out');
    } catch (error) {
        console.error('Error signing out:', error);
        throw error;
    }
};