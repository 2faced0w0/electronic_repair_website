import React, { useState } from 'react';
const NavBar = () => {
  const [focusedLink, setFocusedLink] = useState(null);

  const handleFocus = (link) => {
    setFocusedLink(link);
  };

  const handleBlur = () => {
    setFocusedLink(null);
  };

  return (
    <nav className={`flex justify-between items-center p-4 ${focusedLink ? 'focused' : ''}`}>
      <h1 className="text-2xl font-bold">ElectroFix</h1>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded ${focusedLink === 'services' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onMouseEnter={() => handleFocus('services')}
          onMouseLeave={handleBlur}
        >
          <a href="#services">Services</a>
        </button>
        <button
          className={`px-4 py-2 rounded ${focusedLink === 'book' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onMouseEnter={() => handleFocus('book')}
          onMouseLeave={handleBlur}
        >
          <a href="#book">Book Repair</a>
        </button>
        <button
          className={`px-4 py-2 rounded ${focusedLink === 'reviews' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onMouseEnter={() => handleFocus('reviews')}
          onMouseLeave={handleBlur}
        >
          <a href="#reviews">Reviews</a>
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
      </div>
    </nav>
  );
};

export default NavBar;