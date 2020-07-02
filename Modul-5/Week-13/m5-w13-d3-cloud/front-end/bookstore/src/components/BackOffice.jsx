import React, { Component } from 'react'
import SingleBookListItem from "./SingleBookListItem"
import {Col, Container, Row, Button} from "react-bootstrap"
import CreateBook from "./CreateBook"

export default class BackOffice extends Component {
    state = {
        books: [],
        openModal: false
    }
    render() {
        
        return (
            <Container>
                <h1> Welcome to the BackOffice 
                    <Button onClick={()=>this.setState({ openModal: true})}> Create </Button></h1>
                    {this.state.openModal && 
                <CreateBook show={this.state.openModal} onClose={()=> this.setState({openModal:false})}
                onNewBook = {(book) => this.setState({books: this.state.books.concat(book),
                openModal: false})}
                />}

                {this.state.books.map(book => 

             
                <SingleBookListItem item={book} 
                     onDelete = {(asin) => this.setState({ books: this.state.books.filter(book => book.asin !== asin)})
                    }
                    
               />
              
                    )}
                    
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

