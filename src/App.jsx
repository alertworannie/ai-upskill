import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main style={{ 
        flex: '1', 
        padding: '2rem', 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #646cff, #535bf2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Hello Detective World! 🕵️‍♀️🌍
        </h1>
        
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
          Welcome to your detective-themed React app! This is a modern setup using Vite for fast development 
          and React 19 with the latest best practices. The mystery of modern web development awaits! 🔍
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <div style={{ 
            padding: '1rem', 
            border: '2px solid #646cff', 
            borderRadius: '8px',
            minWidth: '200px'
          }}>
            <h3>⚡ Vite</h3>
            <p>Lightning fast build tool</p>
          </div>
          
          <div style={{ 
            padding: '1rem', 
            border: '2px solid #61dafb', 
            borderRadius: '8px',
            minWidth: '200px'
          }}>
            <h3>⚛️ React 19</h3>
            <p>Latest React features</p>
          </div>
          
          <div style={{ 
            padding: '1rem', 
            border: '2px solid #4ade80', 
            borderRadius: '8px',
            minWidth: '200px'
          }}>
            <h3>📁 Clean Structure</h3>
            <p>Organized file layout</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
