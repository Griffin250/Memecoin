import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../pages/ServerError.css"; 

const ServerError = () => {
  const [dots, setDots] = useState("...");

  // Simulate loading effect with dots changing every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="server-crash">
      <h1 className="glitch" data-text="500 ERROR">
        500 ERROR
      </h1>
      <h2>🚨 Server Overloaded {dots}</h2>
      <p className="error-message">
        Our servers are currently experiencing **heavy traffic**!  
        The hamsters running the servers are working hard to fix this issue. 🐹💨
      </p>
     <Link to="/moonshot"> <button className="retry-btn">
        🔄 Retry
      </button>
      </Link>
      <Link to="/" className="home-link">🏠 Go Back Home</Link>
    </div>
  );
};

export default ServerError;
