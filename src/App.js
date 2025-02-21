import "../src/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SolonaContract from "./components/pages/SolonaContract";
import BuyNowSection from "./components/pages/BuyNowSection";
import BoopCommunity from "./components/pages/BoopCommunity";
import Footer from "./components/footer/Footer.js";
import Navbar from "./components/header/Navbar";
import Home from "./components/pages/Home.js";
import Moonshot from "./components/pages/Moonshot.js";
import ServerError from "./components/pages/ServerError.js";
import NotFound from "./components/pages/NotFound.js";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contract-address" element={<SolonaContract />} />
          <Route path="/how-to-buy" element={<BuyNowSection />} />
          <Route path="/boop-community" element={<BoopCommunity />} />
          <Route path="/moonshot" element={<Moonshot />} />
          <Route path="/server-error" element={<ServerError/>} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
