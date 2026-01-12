import React from 'react'
import '../styles/products.css';
const Products = () => {
  return (
   <div className="products-container">
    <div className="product-card">
        <img src="./images/bag.jpg" alt="Product" className='product-image'/>
        <h3>Product Title</h3>
        <p className='product-price'>Price<strong>200</strong></p>
        <button className='pay-button'>Pay(200)/-</button>
    </div>
   </div>
  )
}

export default Products