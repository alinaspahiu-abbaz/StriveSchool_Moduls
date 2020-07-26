import React from 'react';
import './App.css';

import NewComponent from "./NewComponent"
import MyComponent from './MyComponent';

class App extends React.Component {

  state = {
    listElements: []
  }


  addListElement = (input) => {
    this.setState({ listElements: [... this.state.listElements, input] })
  }

  render() {
    return <>
      <div className="border">
        <MyComponent text="Some text! " number={3} />
      </div>

      <div className="border">
        <button type="button" onClick={() => this.addListElement('New!')}>ADD</button>
        <NewComponent elements={this.state.listElements} />
      </div>
    </>
  }
}

export default App;
