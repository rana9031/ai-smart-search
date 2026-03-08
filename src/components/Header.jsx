function Header({ user }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1>AI Smart Search</h1>
          <p className="subtitle">Ask me anything</p>
        </div>
        <div className="header-right">
          <span className="user-name">👤 {user.name}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
