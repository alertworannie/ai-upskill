import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';

function App() {
  return (
    <>
      <BackgroundElements />
      <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 p-8 text-center flex flex-col justify-center items-center">
        <h1 className="text-5xl mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold">
          Hello Detective World! 🕵️‍♀️🌍
        </h1>
        
        <p className="text-xl mb-8 max-w-2xl text-gray-700">
          Welcome to your detective-themed React app! This is a modern setup using Vite for fast development 
          and React 19 with the latest best practices. The mystery of modern web development awaits! 🔍
        </p>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="p-4 border-2 border-blue-500 rounded-lg min-w-[200px] bg-white/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">⚡ Vite</h3>
            <p className="text-gray-600">Lightning fast build tool</p>
          </div>
          
          <div className="p-4 border-2 border-cyan-400 rounded-lg min-w-[200px] bg-white/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">⚛️ React 19</h3>
            <p className="text-gray-600">Latest React features</p>
          </div>
          
          <div className="p-4 border-2 border-green-400 rounded-lg min-w-[200px] bg-white/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">🎨 Tailwind CSS</h3>
            <p className="text-gray-600">Utility-first CSS framework</p>
          </div>
          
          <div className="p-4 border-2 border-purple-500 rounded-lg min-w-[200px] bg-white/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">📁 Clean Structure</h3>
            <p className="text-gray-600">Organized file layout</p>
          </div>
        </div>
      </main>
      
      <Footer />
      </div>
    </>
  );
}

export default App;
