import React, { Component } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import items from "../data/menu.json";
import DishComments from './DishComments';
import Reservations from './Reservations';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
       title: "Welxome to Strivesturant",
       selectedDish: null,
      };
  }
   
  selectNewDish = (dish) => {
    this.setState({ selectedDish: dish });
  };

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
                     {items.map((dish) => {
                       return (
                        <Carousel.Item key={dish.id}>
                        <img
                          className="d-block w-100"
                          src={dish.image}
                          alt={dish.name}
                          onClick={() => this.selectNewDish(dish)}
                        />
                        <Carousel.Caption>
                          <h3>{dish.name}</h3>
                          <p>{dish.description}</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                       )
                     }
                    )} 
                 </Carousel>
              </Col>
          </Row>

          <Row className="mb-5">
          <DishComments selectedDish={this.state.selectedDish} />
        </Row>

        <Row>
          <Col xs={12}> 
            <Reservations />
          </Col>
        </Row>
        </Container>
     
    
    );
  }
}
  
export default Home;
