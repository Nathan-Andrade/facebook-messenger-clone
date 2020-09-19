import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

import Message from './components/Messages/Message';

import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hi']);
  const [username, setUsername] = useState('');

  useEffect(() => {
   const name = prompt('Please enter your name');
  }, [])

  // função para enviar as menssagens
  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input])
    setInput('');
  }

  return (
    <div className="App">
      <h1>Facebook Messenger Clone</h1>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {/* messages themselves */}
      {
        messages.map(message => (
          <Message text={message} />
        ))
      }
    </div>
  );
}

export default App;
