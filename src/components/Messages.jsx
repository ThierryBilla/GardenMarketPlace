// Messages.jsx

import React, { useState } from 'react';
import '../css/Messages.css';

function Messages() {
  const [conversations, setConversations] = useState([
    { id: 1, name: 'Alice', messages: ['Bonjour, comment ça va?', 'Très bien, merci!'] },
    { id: 2, name: 'Bob', messages: ['Je suis intéressé par votre plante.', 'Pouvez-vous m\'en dire plus?'] },
    // Ajoutez plus de conversations ici
  ]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    const updatedConversations = conversations.map(conversation => {
      if (conversation.id === selectedConversation.id) {
        return {
          ...conversation,
          messages: [...conversation.messages, newMessage],
        };
      }
      return conversation;
    });
    setConversations(updatedConversations);
    setNewMessage('');
  };

  return (
    <div className="messages">
      {selectedConversation ? (
        <div className="conversation">
          <h2>Conversation avec {selectedConversation.name}</h2>
          <div className="message-list">
            {selectedConversation.messages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
          <input 
            type="text" 
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)} 
            placeholder="Tapez votre message ici..."
          />
          <button onClick={handleSendMessage}>Envoyer</button>
          <button onClick={() => setSelectedConversation(null)}>Retour</button>
        </div>
      ) : (
        <div className="conversation-list">
          {conversations.map(conversation => (
            <div 
              key={conversation.id} 
              className="conversation-item" 
              onClick={() => handleSelectConversation(conversation)}
            >
              <p>{conversation.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Messages;
