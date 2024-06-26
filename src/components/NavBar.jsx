import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Categoria from "./Categoria";
import CardWidget from './CardWidget';


const NavBar = () => {
    return (
        <>



    <Navbar className='centradodenavbar' expand="lg" >
      <Container fluid>
     
        <Navbar.Brand href="#">Busca lo que gustes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
        <Categoria/>
            <Nav.Link href="#" disabled>
              
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Escribe lo que quieres buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{background:"black"}} >Buscar</Button>
          </Form>
        
         
        </Navbar.Collapse>
        <CardWidget/>
      </Container>
     
    </Navbar>
   

        </>
    )
}

export default NavBar;
