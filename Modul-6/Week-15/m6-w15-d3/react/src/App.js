import React, { Component } from 'react'
import BookList from './components/BookList';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
//import {Dash} from "react-bootstrap-icons"
import {Button} from 'react-bootstrap'

export default class App extends Component {
  state = {
    books: [],
    cart:[],
    page: 0,
    pageSize: 3
  }

  setPage = async(page) =>{
       this.setState({ page:page }, async () =>{ await this.fetchData() })
}

  render() {
    return (

      <Router>
        {/* <Navigation cart={this.state.cart} /> */}
        <Switch>
          <Route path="/" exact >
            {this.state.page >0 &&
            <Button  
            onClick = {()=> this.setPage(this.state.page-1)} >-</Button>}
            <Button  onClick = {()=> this.setPage(this.state.page+1)}>+</Button>
            <BookList books={this.state.books} />
          </Route>

          <Route path="/cart" exact>
            {/* <Cart cart={this.state.cart} /> */}
          </Route>
        </Switch>
      </Router>
     
    )
  }
  
fetchData = async () =>{
  const res = await fetch(`http://localhost:3024/books?limit=${this.state.pageSize}&offset=${this.state.page * this.state.pageSize}`)
  //http://localhost:3032/students
  //http:&//localhost:5432/books
  const books = await res.json()
  this.setState({
    books: books
  })
}

  componentDidMount = async ()=>{
  
    await this.fetchData()
  }
}
