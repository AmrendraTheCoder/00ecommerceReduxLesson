import React, {useEffect, useState} from 'react'
import './App.css'
import Cart from './components/Card'
import Product from './components/Product'
// import {products} from '../public/products.json'

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('../public/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className='App'>
      <Cart/>
      <div className='products' >
        {products.map((products) => (
          <Product key={products.id} {...products}/>
        ))}
      </div>
    </div>
  )
}

export default App
