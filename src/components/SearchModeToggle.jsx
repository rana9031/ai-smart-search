function SearchModeToggle({ mode, onModeChange }) {
  return (
    <div className="search-mode-toggle">
      <button
        className={mode === 'quick' ? 'active' : ''}
        onClick={() => onModeChange('quick')}
      >
        Quick Search
      </button>
      <button
        className={mode === 'deep' ? 'active' : ''}
        onClick={() => onModeChange('deep')}
      >
        Deep Search
      </button>
    </div>
  );
}

export default SearchModeToggle;
