import React from 'react';
import Header from '../Header/Header';
import './App.css';
import Container from '../shared/Container/Container';
import Table from '../shared/Table/Table';


function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container>
        <Table/>
      </Container>
    </div>
  );
}

export default App;
