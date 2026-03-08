function Sidebar({ 
  searchMode, 
  onSearchModeChange, 
  darkMode, 
  onToggleDarkMode, 
  onNewSearch, 
  hasMessages,
  onLogout,
  onImageUpload,
  onHealthMode,
  disabled
}) {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">AI</div>
      
      <div className="sidebar-top">
        <button 
          onClick={onNewSearch} 
          className="sidebar-btn"
          title="New chat"
          disabled={!hasMessages}
        >
          <span className="btn-icon">✏️</span>
          <span className="btn-label">New chat</span>
        </button>
        
        <button 
          onClick={() => onSearchModeChange(searchMode === 'deep' ? 'quick' : 'deep')} 
          className={`sidebar-btn ${searchMode === 'deep' ? 'active' : ''}`}
          title={searchMode === 'deep' ? 'Switch to Quick Search' : 'Switch to Deep Search'}
        >
          <span className="btn-icon">🔍</span>
          <span className="btn-label">{searchMode === 'deep' ? 'Deep search' : 'Quick search'}</span>
        </button>
        
        <button 
          onClick={onImageUpload} 
          className="sidebar-btn"
          disabled={disabled}
          title="Upload image"
        >
          <span className="btn-icon">🖼️</span>
          <span className="btn-label">Images</span>
        </button>
        
        <button 
          onClick={onHealthMode} 
          className="sidebar-btn"
          title="Health assistant"
        >
          <span className="btn-icon">🏥</span>
          <span className="btn-label">Health</span>
        </button>
        
        <button 
          onClick={onToggleDarkMode} 
          className="sidebar-btn"
          title={darkMode ? 'Light mode' : 'Dark mode'}
        >
          <span className="btn-icon">{darkMode ? '☀️' : '🌙'}</span>
          <span className="btn-label">{darkMode ? 'Light mode' : 'Dark mode'}</span>
        </button>
      </div>
      
      <div className="sidebar-bottom">
        <button 
          onClick={onLogout} 
          className="sidebar-btn"
          title="Logout"
        >
          <span className="btn-icon">👤</span>
          <span className="btn-label">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
