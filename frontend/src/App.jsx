import React from 'react'
import Products from './components/Products'
import productData from './components/data';
const App = () => {
  return (
    <Products products={productData}/>
  )
}

export default App