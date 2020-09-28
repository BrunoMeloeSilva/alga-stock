import React from 'react';
import Button from '../shared/Button/Button';
import Header from '../Header/Header';
import './App.css';
import Container from '../shared/Container/Container';

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
      </Container>
    </div>
  );
}

export default App;
