import React, { Component } from 'react'
import SingleBook from "./SingleBook"
import {Col, Container, Row} from "react-bootstrap"

export default class HomePage extends Component {
    state = {
        books: []
    }
    render() {
        return (
            <Container>
                <Row className="mt-5">
                {this.state.books.map(book => 

                <Col md={4} sm={6}>
                <SingleBook item={book} />
                </Col>
                    )}
                    </Row>
           </Container>
        )
    }

    componentDidMount = async () => {

        const booksResp = await fetch("http://localhost:3003/books")
        const books = await booksResp.json()
        this.setState({
            books: books.data.slice(0,12)
        })
        console.log(books)
    }
}


