import React, { Component } from 'react'
import BookList from './components/BookList';


export default class App extends Component {
  state = {
    books: []
  }
  render() {
    return (
      <div>
        <h1> HEllo world!</h1>
        <BookList books={this.state.books} />
      </div>
    )
  }
  
  componentDidMount = async ()=>{
    const res = await fetch("http://localhost:3023/books")
    //http://localhost:3032/students
    //http:&//localhost:5432/books
    const books = await res.json()
    this.setState({
      books: books
    })
  }
}
