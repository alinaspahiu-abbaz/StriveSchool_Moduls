import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Card, Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';


// create a variable for categories
let bookCategories=['fantasy', 'horror', 'history', 'fantasy', 'scifi']

let books = {
  fantasy: require('../data/fantasy.json'),
  horror: require('../data/horror.json'),
  romance: require('../data/romance.json'),
  history: require('../data/history.json'),
  scifi: require('../data/scifi.json')
}

class MyHome extends React.Component {

  constructor(props) {
    super(props);
    this.state={ 
      books: books.horror.slice(0,6),
      categorySelected: this.props.jumboTitle
    }
    

  }


  //function
  handleDropdownChange = (category) => {
    this.setState({books: books[category].slice(0,6),categorySelected: category })
  }


  // search functions
  handleSearchQuery = (searchQuery) => {
    let category = this.state.categorySelected;
   // console.log(e.target.value)
     if(searchQuery) 
      {
       let filteredBooks = books[category].filter( (book) => book.title.toLowerCase().includes( searchQuery.toLowerCase() ) )
         console.log('FilteredBooks', filteredBooks)
      this.setState({books: filteredBooks.slice(0,6)})
      } else {
       this.setState({books: books[category].slice(0,12)})
     }
  }
 
  render() {
    //console.log(this.props.jumboTitle);
    console.log('BOOOOKKKS', books)
    return (
      <div>
        <Jumbotron>
          <h1>{this.props.jumboTitle}</h1>
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.   Rerum neque debitis, ullam reiciendis.
          </p>
          <p> 
            <Button variant='success'> Learn more...</Button>
          </p>
        </Jumbotron>

        <Container>
          <InputGroup>
          <DropdownButton as={InputGroup.Prepend} id="dropdown-basic-button" title={this.state.categorySelected} className='mb-2'>
          
           {bookCategories.map((category, index) => {
             return(
                   <Dropdown.Item 
                     href="#/action-1" 
                     key={`cat-${index}`} 
                     onClick={() => this.handleDropdownChange(category)} >
                       {category}
                    </Dropdown.Item>
                    )
           })}
           
           </DropdownButton>
           <FormControl 
               placeholder="Search Books by Title"
               aria-label="Username"
               aria-describedby="basic-addon1"
               onChange={(e) => this.handleSearchQuery(e.target.value) }
            />
           </InputGroup>
           <Row>
            {this.state.books && this.state.books.map((book, i) => {
              return( 
                   // console.log(book)npm start

                    <Col xs={12} sm={6} md={4} key={`card-${book.asin}`}>
                      
                    <Card className="mb-3" style={{ width: '18.85rem' }}>
                        <Card.Img variant="top" src={book.img}/>
                      <Card.Body>
                        <Card.Title>{ book.title}</Card.Title>
                        <Card.Text>
                          <p>{book.category}</p>
                          <p>{book.price} $</p>
                        </Card.Text>
                       <Button variant="secondary">Buy the book</Button>
                    </Card.Body>
                   </Card>
                   </Col> 
                     )
                })
            }
            
          </Row>
        </Container>
      </div>
    )
  }
}


export default MyHome







































// import React from "react";
// import {
//   Jumbotron,
//   Button,
//   Container,
//   Row,
//   Col,
//   Card,
//   Dropdown,
//   DropdownButton,
//   InputGroup,
//   FormControl,
// } from "react-bootstrap";

// let bookCategories = ["fantasy", "horror", "history", "romance", "scifi"];
// let books = {
//   fantasy: require("../data/fantasy.json"),
//   horror: require("../data/horror.json"),
//   history: require("../data/history.json"),
//   romance: require("../data/romance.json"),
//   scifi: require("../data/scifi.json"),
// };

// class MyHome extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       books: books.fantasy.slice(0, 12),
//       categorySelected: this.props.jumboTitle,
//     };
//   }

//   handleDropdownChange = (category) => {
//     this.setState({
//       books: books[category].slice(0, 12),
//       categorySelected: category,
//     });
//   };

//   handleSearchQuery = (searchQuery) => {
//     let category = this.state.categorySelected;

//     if (searchQuery) {
//       let filteredBooks = books[category].filter((book) =>
//         book.title.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       this.setState({ books: filteredBooks.slice(0, 12) });
//     } else {
//       this.setState({ books: books[category].slice(0, 12) });
//     }
//   };

//   render() {
//     return (
//       <div>
//         <Jumbotron>
//           <h1>{this.props.jumboTitle}</h1>
//           <p>
//             This is a simple hero unit, a simple jumbotron-style component for
//             calling extra attention to featured content or information.
//           </p>
//           <p>
//             <Button variant="primary">Learn more</Button>
//           </p>
//         </Jumbotron>
//         <Container>
//           <InputGroup>
//             <DropdownButton
//               as={InputGroup.Prepend}
//               id="dropdown-basic-button"
//               className="mb-3"
//               title={this.state.categorySelected}
//             >
//               {bookCategories.map((category, index) => {
//                 return (
//                   <Dropdown.Item
//                     href="#/action-1"
//                     key={`dropdown-category-${index}`}
//                     onClick={() => this.handleDropdownChange(category)}
//                   >
//                     {category}
//                   </Dropdown.Item>
//                 );
//               })}
//             </DropdownButton>
//             <FormControl
//               placeholder="Search Books by Title"
//               aria-label="Search"
//               aria-describedby="basic-addon1"
//               onChange={(e) => this.handleSearchQuery(e.target.value)}
//             />
//           </InputGroup>
//           <Row>
//             {this.state.books ? (
//               this.state.books.map((book) => {
//                 return (
//                   <Col xs={6} key={book.asin}>
//                     <Card style={{ width: "18rem" }}>
//                       <Card.Img variant="top" src={book.img} />
//                       <Card.Body>
//                         <Card.Title>{book.title}</Card.Title>
//                         <Card.Text>€{book.price}</Card.Text>
//                         <Button variant="primary">Go somewhere</Button>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 );
//               })
//             ) : (
//               <div> nothing here </div>
//             )}
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default MyHome;