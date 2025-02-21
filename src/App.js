
import '../src/index.css';
import Footer from './components/footer/Footer.js';
import Navbar from './components/header/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
      <Home />

      <Footer/>
    </div>
  );
}

export default App;
