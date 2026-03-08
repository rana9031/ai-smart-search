function Message({ message }) {
  return (
    <div className={`message ${message.type}-message`}>
      <div className="message-label">
        {message.type === 'user' ? 'You' : 'AI Assistant'}
      </div>
      {message.image && (
        <div className="message-image">
          <img src={message.image} alt="Uploaded" />
        </div>
      )}
      <div className="message-content" style={{ whiteSpace: 'pre-wrap' }}>
        {message.text}
      </div>
    </div>
  );
}

export default Message;
