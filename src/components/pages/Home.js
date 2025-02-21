import React from 'react'
import logo from '../../images/boopcoin_official.png';
import SolanaContract from '../pages/SolonaContract.js';
import BoopCommunity from './BoopCommunity.js';
const Home = () => {
  return (
    <> 
    <div className='App'>
          <h1> Welcome to Boopcoin Official Memecoin</h1>
          <img src={logo} className="App-logo" alt="logo" />
    </div>
    <SolanaContract />

    <BoopCommunity />
    </>
  )
}

export default Home