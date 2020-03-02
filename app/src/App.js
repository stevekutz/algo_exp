import React from 'react';
import logo from './logo.svg';
import './App.css';
import RadioComp from './comp/RadioComp';


function App() {
  return (
    <div className="App">
        <RadioComp idInfo = "name"/>
        <RadioComp idInfo = "other"/>
    </div>
  );
}

export default App;
