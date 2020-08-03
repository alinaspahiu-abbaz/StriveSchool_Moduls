import React from 'react';
import {Button} from "react-bootstrap"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {connect} from 'react-redux'



const mapStateToProps = (state) =>({...state})

const mapDispatchToProps = (dispatch) =>({
   increment : () => 
    dispatch({
      type: 'INCREMENT', // type is always spelled Uppercase
    })
  ,

     decrement: () => 
  dispatch({
    type: 'DECREMENT' // type is always spelled Uppercase
  })
})

function App({count, increment, decrement}) {
  return (
    <div className="App">

      <header className="App-header" style={{fontSize: '5em'}}>
       <Button variant='info' onClick={increment}> + </Button>
        {count}
       <Button variant='info' onClick={decrement}> - </Button>
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
