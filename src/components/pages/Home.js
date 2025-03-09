import React from 'react'
import logo from '../../images/boopcoin_official.png';
import SolanaContract from '../pages/SolonaContract.js';
import BoopCommunity from './BoopCommunity.js';
import BuyNowSection from './BuyNowSection.js';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 300, // Animation duration in milliseconds
      offset: 400,    // Offset (in px) from the top before animation starts
      once: false,     // Whether animation should happen only once
    });
  }, []);
  return (
    <> 
    <div className='App' data-aos="zoom-in">
          <h1 data-aos="fade-up"> Welcome to Greed 3 – The Cutest Memecoin on the Blockchain! 🐾💥</h1>
          <img src={logo} className="App-logo" alt="logo" data-aos="zoom-out"/>
        <div className='description'>
          <p data-aos=""> Greed 3 isn’t just a token—it’s a movement! Inspired by the internet’s favorite boop-worthy moments,
             this memecoin brings fun, community, and unstoppable vibes to the crypto space. <br/>
            Whether you’re here to trade, collect, or simply enjoy the ride, 
            BOOP is built for those who love memes, decentralization, and of course… booping to the moon! 🚀
            </p>
        </div>
          
    </div>
    <SolanaContract />
    <BuyNowSection />
    <BoopCommunity />
    </>
  )
}

export default Home