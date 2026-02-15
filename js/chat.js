// Import required libraries
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, onSnapshot } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_PROJECT_ID.appspot.com',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to send messages
async function sendMessage(channelId, message) {
    try {
        const docRef = await addDoc(collection(db, 'channels', channelId, 'messages'), {
            text: message,
            createdAt: new Date(),
        });
        console.log('Message sent with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}

// Function to listen for messages in a channel
function listenForMessages(channelId) {
    const q = query(collection(db, 'channels', channelId, 'messages'));
    onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().text}`);
        });
    });
}

// Examples of usage:
// sendMessage('channel1', 'Hello everyone!');
// listenForMessages('channel1');

export { sendMessage, listenForMessages };