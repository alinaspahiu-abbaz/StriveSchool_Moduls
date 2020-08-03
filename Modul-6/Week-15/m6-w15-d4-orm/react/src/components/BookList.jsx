import React, {Component} from "react"
import {Container, Row} from "react-bootstrap"
import BookListItem from "./BookListItem"

class BookList extends Component {

    render (){
        return(
            <Container className="my-5">
                <Row >
                    {this.props.books.map(x => <BookListItem key={x.asin} item={x} />)}
                </Row>
            </Container>
        )
    }
  
}

export default BookList