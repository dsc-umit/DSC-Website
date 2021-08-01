import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from "./logo.png";
import "./Header.css";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg"  variant="light" style={{backgroundColor: "white", paddingTop: "1rem" }}>
            <Container>
            <Navbar.Brand href="#home"><img src={logo} height={40} className="d-inline-block align-top"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav> 
                <Nav>
                <Nav.Link className="link" href="#home">Home</Nav.Link>
                <Nav.Link className="link" href="#about">About</Nav.Link>
                <Nav.Link className="link" href="#events">Events</Nav.Link>
                <Nav.Link className="link" href="#tests">Testimonials</Nav.Link>
                <Nav.Link className="link" href="#team">Team</Nav.Link>
                <Nav.Link className="link" href="#blog">Blog</Nav.Link>
                <Nav.Link className="link" href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
