import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">Boopcoin </div>
            <div className='footer-socials'> 
            <div className="telegram icon"> <a href='https://t.me/CallAnalyser/118637' target='blank'><FontAwesomeIcon icon={faTelegram} /> </a> </div>
            <div className="x-twitter icon"> <a href='https://x.com/home' target='blank'>< FontAwesomeIcon icon={faXTwitter} /></a> </div>
            </div>
            <nav className="footer-nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#how-to-buy">How to Buy</a>
                <a href="#contact-us">Contact Us</a>
            </nav>
            <div className="footer-text">
                <p>Boopcoin Memes are a fun expression of support for the ideals behind "$BOOP" and its artwork. 
                    They are not an investment, security, or financial opportunity.
                     Boopcoin has no political affiliations. See Terms & Conditions Here, See Card Allocation Here.</p>
            </div>
            <div className="footer-disclaimer">
                <p><p>“BOOP” is a community-driven memecoin with no affiliation to any individual, organization, or entity. 
                    This product is not distributed or sold by any official company or representatives. 
                    BOOP Memecoin exists purely for entertainment and engagement within the meme culture. 
                    It holds no investment value and should not be considered a financial asset.</p></p>
            </div>
            <div className="footer-warning">
            <strong>BOOP Memecoin will never call, text, email, or otherwise contact you to request your personal information.
                 Please stay vigilant and protect your privacy.</strong>
            </div>
            <div className="footer-bottom">
            <span>© 2025 Boopcoin Memecoin. All rights reserved.</span>

                <Link to="/not-found"> Privacy Policy</Link>
                <Link to="/not-found"> Terms & Conditions</Link>
            </div>
        </footer>
    );
};

export default Footer;
