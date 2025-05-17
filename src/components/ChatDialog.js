import React, { useState, useEffect } from 'react';
import './ChatDialog.css'; 

const ChatDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load the Botpress scripts
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.4/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    // Load the second script after the first one
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://files.bpcontent.cloud/2025/04/24/06/20250424063032-YZC5R5CU.js';
      script2.async = true;
      document.body.appendChild(script2);
      setIsLoaded(true);
    };

    // Cleanup function
    return () => {
      if (document.body.contains(script1)) {
        document.body.removeChild(script1);
      }
      const script2 = document.querySelector('script[src="https://files.bpcontent.cloud/2025/04/24/06/20250424063032-YZC5R5CU.js"]');
      if (script2 && document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
    };
  }, []);

  // Function to toggle chat visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
    
    // If Botpress webchat is loaded, we can control it programmatically
    if (window.botpressWebChat) {
      if (!isOpen) {
        window.botpressWebChat.sendEvent({ type: 'show' });
      } else {
        window.botpressWebChat.sendEvent({ type: 'hide' });
      }
    }
  };

  return (
    <div className="chat-dialog-container">
      {/* Chat button that floats at the bottom right */}
      <button 
        className={`chat-button ${isOpen ? 'active' : ''}`}
        onClick={toggleChat}
        aria-label="Toggle chat dialog"
      >
        {isOpen ? (
          <span className="close-icon">×</span>
        ) : (
          <span className="chat-icon">💬</span>
        )}
      </button>
      
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="chat-loading-indicator">
          <p>Loading chat assistant...</p>
        </div>
      )}
      
      {/* Optional: Add a welcome message or instructions */}
      <div className={`chat-instructions ${isOpen ? 'visible' : 'hidden'}`}>
        <h3>Welcome to our FAQ Assistant!</h3>
      <p>Ask any questions about our services and I'll be happy to help.</p>
  
  <div className="diploma-title">
    DEVELOPMENT OF AUTOMATION TOOLS FOR OPERATOR'S TELECOMMUNICATION NETWORK MANAGEMENT
  </div>
  
  <div className="author-info">
    <p>Author: Xolmatov Elbek</p>
    <p>Group: 424-21</p>
  </div>
</div>
    </div>
  );
};

export default ChatDialog;