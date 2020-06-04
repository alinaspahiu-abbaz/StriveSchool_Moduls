import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import NewComponent from './NewComponent';
import UseState from './UseState'

function App() { 
  return (
    //this is a JSX
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
       
       
        <h3> This is my first test!</h3>
        <NewComponent elements={['one', 'two', 'three']}/>

        <UseState elements={['nje', 'dy', 'tre']}/>

        

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
