import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyComponent from './MyComponent';


function App() { 
  return (
    //this is a JSX
    <div className="App">
      <header className="App-header">
        <MyComponent text="Some text" number={3}/>
        <MyComponent text="other text" />
        <MyComponent />
        <img src={logo} className="App-logo" alt="logo" />
           <p>Edit <code> Hiu</code> and save to reload</p>
        <h3> This is my first test!</h3>
      <a href="/"> Content </a>
      <p>Hello Strivers!!</p>

      </header>
    </div>
  );
}

export default App;
