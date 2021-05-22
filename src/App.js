import React from 'react';
import styled from 'styled-components';
import  Header  from './components/Header';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Container className="App">
      <Header/>
      <Home/>
    </Container>
  );
}

export default App;

const Container = styled.div`

`