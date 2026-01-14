import React from 'react'
import '../styles/products.css';
import axios from 'axios';
const Products = ({ products }) => {
  console.log(products);
    const checkoutHandler=async(amount)=>{
        console.log(amount)
        const {data:keyData} = await axios.get("/api/v1/getKey");
        const{key}=keyData;
        console.log(key);
        const {data:orderData} = await axios.post("/api/v1/payment/process", { amount });
        console.log(orderData)
        const {order}=orderData;
        console.log(order); 
         const options = {
        key,
        amount,
        currency: 'INR',
        name: 'Harsh coding',
        description: 'Razorpay Payment',
        order_id: order.id,
        callback_url: '/api/v1/paymentVerification', // Your success URL
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#54c9f3'
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
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
