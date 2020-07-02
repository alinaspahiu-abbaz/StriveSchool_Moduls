import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import{Row, Col, Form, Button, Container, Image} from "react-bootstrap"

 class EditBook extends Component {
    state ={

    }


    editBook = async() => {
 
        const booksResp = await fetch("http://localhost:3003/books/" + this.state.asin,
        {
          
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({...this.state})
        })
        const book = await booksResp.json()
        console.log(book)
    
    }

    render() {
        const {title, img, category, price, asin } = this.state
        return (
            <Row>
                <Col> <Image fluid src={img} /> </Col>

                <Col>
                <Form>
                    <Container>
                    <Form.Group controlId="asin">
                        <Form.Label>Asin</Form.Label>
                        <Form.Control type="text"
                                      value = {this.state.asin}
                                      onChange= {(e)=>this.setState({asin: e.currentTarget.value})}
                                      disabled
                                      placeholder="ASIN - Unique Amazon ID" />
                    </Form.Group>
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
                    <Button variant="success" onClick={this.editBook}>Save Changes</Button>
                    </Container>
                   
                </Form>
                </Col>
            </Row>
                
          
        )
    }

    componentDidMount = async() =>{
        const asin = this.props.match.params.asin
        
      //  console.log("The current book asin is: " )
        const booksResp = await fetch("http://localhost:3003/books/" + asin)
        const book = await booksResp.json()
        this.setState({...book})
    }
}

export default withRouter(EditBook)