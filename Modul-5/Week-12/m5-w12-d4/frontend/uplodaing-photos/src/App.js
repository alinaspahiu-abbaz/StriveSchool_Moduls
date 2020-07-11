import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from "./components/MyForm"
import {Container} from "react-bootstrap"

function App() {
  return (
    <Container>
    <h1> React</h1>
    <MyForm />
    </Container>
  );
}

export default App;
