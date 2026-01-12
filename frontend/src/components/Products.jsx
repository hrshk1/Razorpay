import React from 'react'
import '../styles/products.css';

const Products = ({ products }) => {
  console.log(products);

  return (
    <div className="products-container">
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            className="product-image"
          />
          <h3>{item.title}</h3>
          <p className="product-price">
            Price <strong>{item.price}</strong>
          </p>
          <button className="pay-button">
            Pay ({item.price})/-
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
