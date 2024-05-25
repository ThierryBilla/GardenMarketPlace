import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaStar } from 'react-icons/fa'; 
import styles from '../css/ProductDetail.module.css';
import FooterNavbar from '../components/FooterNavbar';

function ProductDetail() {
  const { id } = useParams();
  const product = {
    id,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
  };

  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productImageContainer}>
        <img src={`https://via.placeholder.com/800x800`} alt={product.name} className={styles.productImage} />
        <button 
          className={`${styles.likeButton} ${liked ? styles.clicked : ''}`} 
          onClick={() => setLiked(!liked)}
        >
          <FaHeart />
        </button>
      </div>
      <div className={styles.userProfile}>
        <div className={styles.avatar}></div>
        <div className={styles.userInfo}>
          <span className={styles.username}>Seller Username</span>
          <div className={styles.sellerRating}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
        <span className={styles.price}>${product.price}</span>
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>{product.name}</h2>
        <p className={styles.productDescription}>{product.description}</p>
      </div>
      <div className={styles.productActions}>
        <button className={styles.offerButton}>Offer</button>
        <button className={styles.buyButton}>Buy</button>
      </div>
      <FooterNavbar />
    </div>
  );
}

export default ProductDetail;
