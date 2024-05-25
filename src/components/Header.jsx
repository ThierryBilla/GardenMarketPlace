import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Header.module.css'; // Import correct des styles
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
    <header className={styles.header}> {/* Utilisation correcte des styles */}
      <div className={styles['top-section']}>
        <img src={'./src/assets/images/logo-garden.png'} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles['middle-section']}>
        <div className={styles['search-bar']}>
          <input type="text" placeholder="Search..." className={styles['search-input']} />
        </div>
      </div>
      <div className={styles['bottom-section']}>
        <div className={styles.categories}>
          <h2>Categories <a href="#" className={styles['view-all']} onClick={handleViewAllClick}>View All</a></h2>
          <div className={styles['category-container']}>
            <Link to="/category/1" className={styles.category}>
              <div className={styles.placeholder}></div>
              <h3>Catégorie 1</h3>
            </Link>
            <Link to="/category/2" className={styles.category}>
              <div className={styles.placeholder}></div>
              <h3>Catégorie 2</h3>
            </Link>
            <Link to="/category/3" className={styles.category}>
              <div className={styles.placeholder}></div>
              <h3>Catégorie 3</h3>
            </Link>
            <Link to="/category/4" className={styles.category}>
              <div className={styles.placeholder}></div>
              <h3>Catégorie 4</h3>
            </Link>
          </div>
        </div>
      </div>
      <CategoriesModal show={showModal} onClose={handleCloseModal} />
    </header>
  );
}

export default Header;
