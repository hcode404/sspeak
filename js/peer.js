'use strict';

const Peer = require('peerjs');

// Initialize the peer connection
const peer = new Peer();

peer.on('open', (id) => {
    console.log('Your peer ID is: ' + id);
});

// Handle incoming calls
peer.on('call', (call) => {
    // Answer the call with an A/V stream.
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then((stream) => {
        call.answer(stream);
        call.on('stream', (remoteStream) => {
            // Show stream in some video/canvas element.
            const video = document.getElementById('video');
            video.srcObject = remoteStream;
            video.play();
        });
    });
});

// Function to make a call
function makeCall(peerId) {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then((stream) => {
        const call = peer.call(peerId, stream);
        call.on('stream', (remoteStream) => {
            const video = document.getElementById('video');
            video.srcObject = remoteStream;
            video.play();
        });
    });
}

// Example of making a call
// makeCall('another-peer-id');
