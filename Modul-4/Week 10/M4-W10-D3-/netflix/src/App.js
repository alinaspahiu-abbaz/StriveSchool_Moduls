import React from 'react';
import logo from './logo.svg';
import {Container, Col, Row, Dropdown, DropdownButton} from 'react-bootstrap'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home'
import Register from './components/Register'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
