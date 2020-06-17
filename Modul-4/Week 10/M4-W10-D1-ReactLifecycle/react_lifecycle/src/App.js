import React from 'react';
import logo from './logo.svg';
import './App.css';
import Snippet from './Snippet';

class App extends React.Component {

state={
  test:'',
show: true
}

componentDidMount = () => {
console.log('Ive finished mounting!')
}

changeState = () => {
this.setState({
test:'something',
show: !this.state.show
})
}

 render() {
   console.log('I am in the return method!')
  return (
    <div className="App">
      <header className="App-header">
       <button type='button' onClick={this.changeState}>PRess ME</button>
       {this.state.show && <Snippet title={'hello'}/>}
      </header>
    </div>
  );
}
}

export default App;
