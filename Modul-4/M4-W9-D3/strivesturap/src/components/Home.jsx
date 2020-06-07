import React, { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import items from "../data/menu.json";


class Home extends Component {
  constructor(props){
    super(props);
    this.state = { title: "Welxome to Strivesturant"};
  }
  render() {
    return (
        <Container>
          <Row className="justify-content-center mt-3">
            <Col xs={6}>
               <h1> Welcome to Strivesturant!</h1>
               <p className='lead'> The best dishes you can find on the wen</p>
                 <hr />
                 <p>Come visit use, we can only cook Pasa!</p>
  
                 <Carousel>
                     {items.map((item) => {
                       return (
                        <Carousel.Item key={item.id}>
                        <img
                          className="d-block w-100"
                          src={item.image}
                          alt={item.name}
                        />
                        <Carousel.Caption>
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                       )
                     }
                    )} 
                 </Carousel>
              </Col>
          </Row>
        </Container>
     
    
    );
  }
}
  
export default Home;
