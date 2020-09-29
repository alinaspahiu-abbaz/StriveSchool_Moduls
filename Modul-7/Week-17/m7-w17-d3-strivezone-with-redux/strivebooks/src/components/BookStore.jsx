import React, { Component } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { books } from "../data/books";

class BookStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookSelected: null,
    };
  }

  changeBook = (id) => this.setState({ bookSelected: id });

  render() {
    return (
      <div className="row">
        <BookList
          books={books}
          bookSelected={this.state.bookSelected}
          changeBook={this.changeBook}
        />
        <BookDetail
          books={books}
          bookSelected={this.state.bookSelected}
          addToCart={this.props.addToCart}
        />
      </div>
    );
  }
}

export default BookStore;