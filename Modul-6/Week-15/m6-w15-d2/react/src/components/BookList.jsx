import React, {Component} from "react"
import {Container, Row} from "react-bootstrap"
import BookListItem from "./BookListItem"

class BookList extends Component {
    state = {
        books: []
      }
    render (){
        return(
            <Container className="my-5">
                <Row>
                    {this.state.books.slice(0,30).map(x => <BookListItem key={x.asin} item={x} />)}
                </Row>
            </Container>
        )
    }
    componentDidMount = async ()=>{
        const res = await fetch("http://localhost:3023/books")
        //http://localhost:3032/students
        //http:&//localhost:5432/books
        const books = await res.json()
        this.setState({
          books: books.rows        })
      }
}

export default BookList