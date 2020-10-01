import React from 'react';
import Header from '../Header/Header';
import './App.css';
import Container from '../shared/Container/Container';
import Table, { TableHeader } from '../shared/Table/Table';
import Products from '../shared/Table/Table.mockdata';
import ProductsForm from '../Products/ProductForm';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]


function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container>
        <Table
          headers={headers}
          data={Products} />
        <ProductsForm/> 
        
      </Container>
    </div>
  );
}

export default App;
