// Header.jsx

import React, { useState } from 'react';
import '../css/Header.css'; 
import CategoriesModal from './CategoriesModal';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleViewAllClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <header className="header">
      <div className="top-section">
        <img src={'./src/assets/images/logo-garden.png'} alt="Logo" />
      </div>
      <div className="middle-section">
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>
      <div className="bottom-section">
        <div className="categories">
          <h2>Categories <a href="#" className="view-all" onClick={handleViewAllClick}>View All</a></h2>
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
      <CategoriesModal show={showModal} onClose={handleCloseModal} />
    </header>
  );
}

export default Header;
