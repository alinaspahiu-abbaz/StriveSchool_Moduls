import React, { Component } from "react"
import { Col, Row, Image, Button, Card } from "react-bootstrap"

class BookListItem extends Component {
    render() {
        const { asin, title, img, price, category } = this.props.item
        return (
            
            <Col md={4}>
                <Row className="mb-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="img" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                           {category} - {price} $
                    </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Row>

            </Col>
          
        )
    }
}

export default BookListItem