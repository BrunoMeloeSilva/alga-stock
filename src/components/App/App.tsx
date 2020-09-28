import React from 'react';
import Button from '../shared/Button/Button';
import Header from '../Header/Header';
import './App.css';
import Container from '../shared/Container/Container';
import Input from '../shared/Input/Input';

function TestComponent() {
  return <div>oi</div>
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container>
        <Button
          appendIcon={ <TestComponent/> }>
          props.children vem do React.FC 
        </Button>
        <Input 
          label="Street"
          placeholder="Rua x, 123 - Bairro"
        />
      </Container>
    </div>
  );
}

export default App;
