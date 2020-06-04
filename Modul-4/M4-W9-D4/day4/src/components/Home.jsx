import React from "react";
import {
  Jumbotron,
  Button,
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

let bookCategories = ["fantasy", "horror", "history", "romance", "scifi"];
let books = {
  fantasy: require("../data/fantasy.json"),
  horror: require("../data/horror.json"),
  history: require("../data/history.json"),
  romance: require("../data/romance.json"),
  scifi: require("../data/scifi.json"),
};

class Home extends React.Component {
  state = {
    books: books.fantasy.slice(0, 12),
    categorySelected: "fantasy",
  };

  handleDropdownChange = (category) => {
    this.setState({
      books: books[category].slice(0, 12),
      categorySelected: category,
    });
  };

  render() {
    console.log("BOOKS", books);
    return (
      <div>
        <Jumbotron>
          <h1>{this.props.jumboTitle}</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Container>
          <DropdownButton
            id="dropdown-basic-button"
            className="mb-3"
            title={this.state.categorySelected}
          >
            {bookCategories.map((category, index) => {
              return (
                <Dropdown.Item
                  href="#/action-1"
                  key={`dropdown-category-${index}`}
                  onClick={() => this.handleDropdownChange(category)}
                >
                  {category}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
          <Row>
            {this.state.books.map((book) => {
              return (
                <Col xs={6} key={book.asin}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>€{book.price}</Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;