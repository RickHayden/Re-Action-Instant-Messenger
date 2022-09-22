import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'

function App() {
  return (
    <ChatEngine
			height='100vh'
			userName='Rick'
			userSecret='rick'
			projectID='1f512ebe-c21c-4249-8510-db906252e132'
    renderChatFeed= {(chatAppProps) => <ChatFeed { ... chatAppProps} />}
    />

  );
}

export default App;
