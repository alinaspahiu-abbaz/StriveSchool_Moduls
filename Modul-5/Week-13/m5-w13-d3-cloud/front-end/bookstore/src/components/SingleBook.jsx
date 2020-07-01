import React, { Component } from 'react'
import {Card, Button} from "react-bootstrap"

export default class SingleBook extends Component {

  
    render() {

        const {title, img, category, price, asin} = this.props.item
        
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {category} - {price} $
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        )
    }
}
