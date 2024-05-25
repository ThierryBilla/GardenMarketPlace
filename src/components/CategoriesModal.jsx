import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/CategoriesModal.module.css';

function CategoriesModal({ show, onClose }) {
  const navigate = useNavigate();

  if (!show) {
    return null;
  }

  const categories = [
    'Catégorie 1', 'Catégorie 2', 'Catégorie 3', 'Catégorie 4',
    'Catégorie 5', 'Catégorie 6', 'Catégorie 7', 'Catégorie 8',
    'Catégorie 9', 'Catégorie 10', 'Catégorie 11', 'Catégorie 12',
    'Catégorie 13', 'Catégorie 14', 'Catégorie 15', 'Catégorie 16'
  ];

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>Toutes les Catégories</h2>
        <div className={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <div
              key={index}
              className={styles.categoryItem}
              onClick={() => handleCategoryClick(category)}
            >
              <div className={styles.placeholder}></div>
              <h3>{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesModal;
