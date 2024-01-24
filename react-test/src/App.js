import logo from './logo.svg';
import ProductTable from './components/productTable/productTable';
import React, { useState, useEffect } from 'react';

function App() {
  const [productArray, setProductArray] = useState()
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => setProductArray(json))

  }, [])

  return (
    <div >

      <ProductTable productArray={productArray ? productArray.products : []}></ProductTable>
    </div>
  );

}

export default App;
