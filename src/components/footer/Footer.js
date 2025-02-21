import React from 'react';
import '../footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">Boopcoin </div>
            <div className='footer-socials'> 
            <div className="twitter icon"> <FontAwesomeIcon icon={faTwitter} /> </div>
            <div className="telegram icon"> <FontAwesomeIcon icon={faTelegram} /> </div>
            </div>
            <nav className="footer-nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#how-to-buy">How to Buy</a>
                <a href="#contact-us">Contact Us</a>
            </nav>
            <div className="footer-text">
                <p> Boopcoin Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$TRUMP" and the associated artwork, 
                    and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. GetTrumpMemes.com is not political and has nothing to 
                    do with any political campaign or any political office or governmental agency. See Terms & Conditions Here, See Card Allocation Here </p>
            </div>
            <div className="footer-disclaimer">
                <p> “BOOP” is a registered trademarks of DTTM Operations LLC. This product is not distributed or sold by Donald J. Trump, The Trump Organization or any of their respective affiliates or principals. Celebration Cards LLC 
                    uses the “BOOP” name and the name, image and likeness of Donald J. Trump pursuant to the terms of a limited license agreement
                     which may be terminated or revoked according to its terms. </p>
            </div>
            <div className="footer-warning">
                <strong>Fight Fight Fight LLC will never call, text, email or otherwise contact you to request your personal information. Please be careful.</strong>
            </div>
            <div className="footer-bottom">
                <span>© 2025 Fight Fight Fight LLC. All rights reserved.</span>
                <a href="#privacy-policy">Privacy Policy</a>
                <a href="#terms-conditions">Terms & Conditions</a>
            </div>
        </footer>
    );
};

export default Footer;
