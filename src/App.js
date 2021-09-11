import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from "./media/logo.png";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Home, Testimonials, Contact, About, Events, Team, Blog, ScrollButton } from './components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function App() {

  const [mode, setMode] = useState(false);
  const switchMode = () => setMode(mode ? false : true);

  return (
    <div className="App" data-theme={mode ? "dark" : "light"}>
      <Router>
        <Route exact path="/">
          <Navbar fixed="top" collapseOnSelect expand="lg" className="main">
              <Container>
                  <Navbar.Brand href="#home"><img src={logo} height={40} className="d-inline-block align-top" alt="logo" /></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav>
                          <Nav.Link className="link link-1" href="#home">Home</Nav.Link>
                          <Nav.Link className="link" href="#about">About</Nav.Link>
                          <Nav.Link className="link" href="#events">Events</Nav.Link>
                          <Nav.Link className="link" href="#team">Team</Nav.Link>
                          <Nav.Link className="link" href="#tests">Testimonials</Nav.Link>
                          <Nav.Link className="link" href="#blog">Blog</Nav.Link>
                          <Nav.Link className="link" href="#contact">Contact</Nav.Link>
                      </Nav>
                      <Nav>
                        <Button className="rounded-pill" variant={mode ? "outline-light" : "outline-dark"} onClick={switchMode}>{mode? <FontAwesomeIcon icon={faSun}/> :  <FontAwesomeIcon icon={faCloudMoon}/> }</Button>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
          <Home />
          <About />
          <Events />
          <Team />
          <Testimonials />
          <Blog />
          <Contact />
          <ScrollButton />
        </Route>

      </Router>
      <a
        href="https://wa.me/+917977244710"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}

export default App;
