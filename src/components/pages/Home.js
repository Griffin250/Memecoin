import React from 'react'
import logo from '../../images/boopcoin_official.png';
import SolanaContract from '../pages/SolonaContract.js';
import BoopCommunity from './BoopCommunity.js';
import BuyNowSection from './BuyNowSection.js';
const Home = () => {
  return (
    <> 
    <div className='App'>
          <h1> Welcome to Boopcoin – The Cutest Memecoin on the Blockchain! 🐾💥</h1>
          <img src={logo} className="App-logo" alt="logo" />
        <div className='description'>
          <p > BOOPCOIN isn’t just a token—it’s a movement! Inspired by the internet’s favorite boop-worthy moments,
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