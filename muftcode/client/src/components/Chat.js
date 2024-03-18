import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    'Hello there!',
    'How are you?',
    'I am doing great!',
    'This is a mock chat.',
    'Feel free to add more messages!'
  ]);

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {/* Display the list of messages */}
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        {/* Input field to add new messages (you can use a form with onSubmit event) */}
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chat;
