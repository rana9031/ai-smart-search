function Header({ user, onMenuClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button className="mobile-menu-btn" onClick={onMenuClick}>
            ☰
          </button>
          <div>
            <h1>AI Smart Search</h1>
            <p className="subtitle">Ask me anything</p>
          </div>
        </div>
        <div className="header-right">
          <span className="user-name">👤 {user.name}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
