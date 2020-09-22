import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';
import { FormControl, Input } from '@material-ui/core';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import db from './components/FirebaseConfig/Firebase';
import Message from './components/Messages/Message';

import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  //roda só quando o app carregar os componentes
  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, []);
  
  // capturar o nome e entrar como um user
  useEffect(() => {
   //const name = prompt('Please enter your name');
   setUsername(prompt('Please enter your name'));
  }, [])

  // função para enviar as menssagens
  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="Facebook-messenger-logo" />
      <h1>Facebook Messenger with Nathan</h1>
      <h2>Welcome {username}</h2>

      <form className="app-form">
        <FormControl className="app-formControl">
          <Input className="app-input" placeholder='Enter a mensage...' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app-iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {/* messages themselves */}
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
