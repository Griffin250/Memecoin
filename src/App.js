
import '../src/index.css';
import Footer from './components/footer/Footer.js';
import Navbar from './components/header/Navbar';
import Home from './components/pages/Home.js';

function App() {
  return (
    <>  <Navbar />
    <div className="App">
      <header className="App-header">
     
      </header>
      <Home />

      <Footer/>
    </div>
    </>
  );
}

export default App;
