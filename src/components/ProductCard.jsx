import React from 'react';
import styles from '../css/ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.content}>
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.textContent}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className={styles.meta}>
            <span className={styles.likes}>100 Likes</span>
            <span className={styles.price}>${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
