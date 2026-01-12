import React from 'react'
import '../styles/products.css';
import axios from 'axios';
const Products = ({ products }) => {
  console.log(products);
    const checkoutHandler=async(amount)=>{
        console.log(amount)
        const data = await axios.post("/api/v1/payment/process", { amount });
        console.log(data)
    }
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
          <button onClick={()=>{checkoutHandler(item.price)}} className="pay-button">
            Pay ({item.price})/-
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
