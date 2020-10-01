import React, { useState } from 'react';
import Header from '../Header/Header';
import './App.css';
import Container from '../shared/Container/Container';
import Table, { TableHeader } from '../shared/Table/Table';
import Products from '../shared/Table/Table.mockdata';
import ProductsForm, { ProductCreator } from '../Products/ProductForm';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]


function App() {
  const [products, setProducts] = useState(Products)
  const handleProductSubmit = (product: ProductCreator) => {
      setProducts([
        ...products,
        {
          id: products.length + 1,
          ...product
        }
      ])
  }

  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container>
        <Table
          headers={headers}
          data={products} />
        <ProductsForm
          onSubmit={handleProductSubmit}/> 
        
      </Container>
    </div>
  );
}

export default App;
