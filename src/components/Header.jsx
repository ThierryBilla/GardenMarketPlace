// Header.jsx

import React from 'react';
import '../css/Header.css'; 

function Header() {
    return (
      <header className="header">
        <div className="top-section">
          <h1>LOGO</h1>
        </div>
        <div className="middle-section">
          <div className="search-bar">
            <input type="text" placeholder="Recherche..." className="search-input" />
          </div>
        </div>
        <div className="bottom-section">
          <div className="categories">
            <h2>Categories <a href="#" className="view-all">View All</a></h2>
            <div className="category-container">
              <div className="category">
                <div className="placeholder"></div>
                <h3>Catégorie 1</h3>
              </div>
              <div className="category">
                <div className="placeholder"></div>
                <h3>Catégorie 2</h3>
              </div>
              <div className="category">
                <div className="placeholder"></div>
                <h3>Catégorie 3</h3>
              </div>
              <div className="category">
                <div className="placeholder"></div>
                <h3>Catégorie 4</h3>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
