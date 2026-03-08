function TypingIndicator() {
  return (
    <div className="message ai-message">
      <div className="message-label">AI Assistant</div>
      <div className="message-content">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;
