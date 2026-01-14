import React from 'react'
import Products from './components/Products'
import productData from './components/data';
import PaymentSuccess from './components/PaymentSuccess';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products products={productData} />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
      </Routes>

    </Router>
  )
}

export default App