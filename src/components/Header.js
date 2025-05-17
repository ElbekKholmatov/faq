import React from 'react';
import './Header.css';

const Header = () => {
const openChatBot = () => {
    // Check if Botpress webchat is available and toggle it
    if (window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: 'toggle' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1>Uzbekistan Telecom FAQ</h1>
        <p>Your guide to telecommunication services in Uzbekistan</p>
      </div>
    </header>
  );
};

export default Header;