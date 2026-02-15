// ui.js

// UI management and DOM manipulation for the chat application

class ChatUI {
    constructor() {
        this.chatList = document.getElementById('chat-list');
        this.messageInput = document.getElementById('message-input');
        this.sendButton = document.getElementById('send-button');
    }
    displayMessage(message) {
        const messageElement = document.createElement('li');
        messageElement.textContent = message;
        this.chatList.appendChild(messageElement);
    }
    clearInput() {
        this.messageInput.value = '';
    }
}

// Usage
const chatUI = new ChatUI();

// Example of adding a message
// chatUI.displayMessage('Hello World!');