import React from 'react';
import Button from '../Button/Button';
import Header from '../Header/Header';
import './App.css';

function TestComponent() {
  return <div>oi</div>
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <div className="Container">
        <Button
          appendIcon={ <TestComponent/> }>
          props.children vem do React.FC 
        </Button>
      </div>
    </div>
  );
}

export default App;
