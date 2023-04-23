import React, { useState, useEffect } from 'react';
import Message from './Message';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch('/api/messages')
      .then(response => response.json())
      .then(data => setMessages(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Messages</h1>
      <ul className="list-group mt-3">
        {messages.map(message => (
          <li className="list-group-item" key={message.id}>
            {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
