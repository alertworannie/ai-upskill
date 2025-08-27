function Header() {
  return (
    <header style={{ 
      background: 'linear-gradient(135deg, #2d3748, #4a5568)', 
      color: '#fff', 
      padding: '1rem', 
      textAlign: 'center',
      marginBottom: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
    }}>
      <h2>🔍 Detective React App 🕵️‍♀️</h2>
      <p>Built with Vite and React - Solving mysteries with code!</p>
    </header>
  );
}

export default Header;
