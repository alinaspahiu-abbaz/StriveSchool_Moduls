import React from 'react'
import { Navbar, Button, FormControl, Nav, Form, Container } from "react-bootstrap"
import {Link} from "react-router-dom"


export default class Navigation extends React.Component {
 render() {
   return (
    <Container>
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                  <Link className = "nav-link" to ="/"> Home </Link>
                  <Link className = "nav-link" to ="/backoffice">Backoffice</Link>
               </Nav>
               <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
      </Navbar>
    </Container>
        )
    }
}

