import React from 'react';
import Header from '../Header/Header';
import './App.css';
import Container from '../shared/Container/Container';
import Table, { TableHeader } from '../shared/Table/Table';
import Products from '../shared/Table/Table.mockdata';
import Form from '../shared/Form/Form';
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';

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
        <Form title="Product form" onSubmit={console.log} >
          <Input
            label="Name"
            placeholder="Ex.: Biscoito"/>
          <Input
            label="Price"
            type="number"
            step="0.01"
            min="0"
            placeholder="Ex.: 1.24"/>
          <Input
            label="Stock"
            type="number"
            min="0"
            placeholder="Ex.: 234"/>
            <Button>Submit</Button>
        </Form>  
        
      </Container>
    </div>
  );
}

export default App;
