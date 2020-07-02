import React, { Component } from 'react'
import { Modal, Button, Form, Container } from "react-bootstrap"

export default class CreateBook extends Component {

    state ={
        title:"",
        category:"",
        asin:"",
        price:0,
        img:""
    }

    createBook = async() =>{

        const newBook={...this.state}
        const booksResp = await fetch("http://localhost:3003/books", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newBook)
        })
        // check if the response is OKEJ
        if(booksResp.ok){
            this.props.onNewBook(newBook)
        }
        
         //tell the parent we have a new kid in town

        // Close the modal
    }
    render() {

        const { onClose } = this.props
        return (
            <Modal show={this.props.show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Insert Book in Catalog</Modal.Title>
                </Modal.Header>
                <Form>
                    <Container>
                    <Form.Group controlId="asin">
                        <Form.Label>Asin</Form.Label>
                        <Form.Control type="text"
                                      value = {this.state.asin}
                                      onChange= {(e)=>this.setState({asin: e.currentTarget.value})}
                                      placeholder="ASIN - Unique Amazon ID" />
                    </Form.Group>
sssssssssss
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" 
                                      value = {this.state.title}
                                      onChange= {(e)=>this.setState({title: e.currentTarget.value})}
                                      placeholder="Title" />
                     </Form.Group>

                    <Form.Group controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text"
                                      value = {this.state.category} 
                                      onChange= {(e)=>this.setState({category: e.currentTarget.value})}
                                      placeholder="Category" />
                    </Form.Group>

                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" 
                                      value = {this.state.price}
                                      onChange= {(e)=>this.setState({price: e.currentTarget.value})}
                                      placeholder="Price" />
                    </Form.Group>

                    <Form.Group controlId="image">
                        <Form.Label>IMG URL</Form.Label>
                        <Form.Control type="text" 
                                      value = {this.state.img}
                                      onChange= {(e)=>this.setState({img: e.currentTarget.value})}
                                      placeholder="Image url" />
                    </Form.Group>
                    </Container>
                   
                </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
              </Button>
                    <Button variant="primary" onClick={this.createBook}>
                        Save Changes
              </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
