import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import  Header  from './components/Header';
import './App.css';
import Home from './components/Home';
import styled, {  } from "styled-components";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Home/>
    </div>
  );
}

export default App;

