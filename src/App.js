import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hi']);

  // função para enviar as menssagens
  const sendMessage = (event) => {
    setMessages([...messages, input])
    setInput('');
  }

  return (
    <div className="App">
      <h1>Facebook Messenger Clone</h1>

      {/* input field */}
      <input value={input} onChange={event => setInput(event.target.value)} />

      {/* button */}
      <button onClick={sendMessage}>Send Message</button>

      {/* messages themselves */}
      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
