import React from 'react';
import './App.css';
import { Container, Row, Col } from "react-bootstrap"
import Navigation from "./components/Navigation"
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
import HomePage from "./components/HomePage"


class App extends React.Component {

  state = {
    books: []
  }
  
  render() {
    return (

      <Router>
      <div>
        <Navigation />
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/details/:asin">
            <div> Details for a single book</div>
          </Route>
          <Route path="/backoffice">
            <div> Delete / Edit / Create</div>
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    
    )
  }
}
export default App;
