import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import styles from '../css/ProductCategory.module.css'; // Importation des styles CSS

import FooterNavbar from '../components/FooterNavbar';

function ProductCategory() {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 29.99 },
    // Ajoute d'autres produits ici...
  ];

  return (
    <div className={styles.productCategoryContainer}>
      <h2>Product Category</h2>
      <div className={styles.sortFilterContainer}>
        {/* Barre de recherche */}
        <div className={styles.searchBar}> {/* Utilisation du nom de classe défini dans les styles CSS */}
          <input type="text" placeholder="Search products..." />
          
        </div>
        {/* Boutons de tri et de filtre */}
        <div className={styles.filters}> {/* Utilisation du nom de classe défini dans les styles CSS */}
          <button>Filters</button>
          <button>Brand</button>
          <button>Price</button>
          <button>Sort By</button>
        </div>
      </div>
      <div className={styles.productList}>
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className={styles.productLink}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <FooterNavbar />
    </div>
  );
}

export default ProductCategory;
