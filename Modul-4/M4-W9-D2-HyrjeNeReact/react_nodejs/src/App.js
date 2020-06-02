import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    //this is a JSX
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1> Hello World!</h1>
        <h3> This is my first test!</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <MyComponent text="some text"> </MyComponent>

        <MyComponent 
           text="other text"
           spaceship={6}>
       </MyComponent>

        <MyComponent></MyComponent>

        <a href="/"> Content </a>

      </header>
    </div>
  );
}

export default App;
