import { useEffect, useRef, useState } from 'react';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

function ChatContainer({ messages, isTyping, darkMode }) {
  const containerRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleScroll = () => {
    if (containerRef.current) {
      setShowBackToTop(containerRef.current.scrollTop > 300);
    }
  };

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="chat-container" ref={containerRef} onScroll={handleScroll}>
      {messages.length === 0 ? (
        <div className="welcome-message">
          <h2>👋 Hello! How can I help you today?</h2>
          <p>Ask me questions, search for information, or have a conversation.</p>
        </div>
      ) : (
        <>
          {messages.map(message => (
            <Message key={message.id} message={message} />
          ))}
          {isTyping && <TypingIndicator />}
        </>
      )}
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop} title="Back to top">
          ↑
        </button>
      )}
    </div>
  );
}

export default ChatContainer;
