import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [focusedLink, setFocusedLink] = useState(null);
  const handleFocus = (link) => {
    setFocusedLink(link);
  };

  const handleBlur = () => {
    setFocusedLink(null);
  };

  return (
    <nav className={`nav ${focusedLink ? 'focused' : ''}`}>
      <h1>ElectroFix</h1>
      <div className="nav-links">
        <button
          className={`nav-link ${focusedLink === 'services' ? 'focused' : ''}`}
          onMouseEnter={() => handleFocus('services')}
          onMouseLeave={handleBlur}
        >
          <a href="#services">Services</a>
        </button>
        <button
          className={`nav-link ${focusedLink === 'book' ? 'focused' : ''}`}
          onMouseEnter={() => handleFocus('book')}
          onMouseLeave={handleBlur}
        >
          <a href="#book">Book Repair</a>
        </button>
        <button
          className={`nav-link ${focusedLink === 'reviews' ? 'focused' : ''}`}
          onMouseEnter={() => handleFocus('reviews')}
          onMouseLeave={handleBlur}
        >
          <a href="#reviews">Reviews</a>
        </button>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default NavBar;