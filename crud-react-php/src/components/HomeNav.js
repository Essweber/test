


import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slide1 from "../assets/images/slide1.webp";
import slide2 from "../assets/images/slide2.webp";
import slide3 from "../assets/images/slide3.webp";
import paypal from "../assets/images/logo-paypal.webp";
import eazyevent from "../assets/images/logo-eazyevent.webp";
import "../assets/style/home.css";
import { useNavigate } from "react-router-dom";


import Carousel from 'react-bootstrap/Carousel';
// Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// btn
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function HomeNav() {


  return (
    <div>
      <Navbar className="home_nav fixed-top" collapseOnSelect expand="lg" variant="dark">
        {/* <Container> */}
        <Navbar.Brand className="home_nav_logo" href="/">
          <img
            className="home-logo"
            src={eazyevent}
            alt="First slide"
          />
          EazyEvent
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">A propos</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item >Services</NavDropdown.Item>
              <NavDropdown.Item href="/services/organisateur">Organisateur</NavDropdown.Item>
              <NavDropdown.Item href="/services/participant">Participant</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Button className="btn-transparent" href="inscription" variant="primary">Inscription</Button>
          <Button className="btn-white" href="Connexion" variant="primary">Connexion</Button>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>


    </div>
  )
}
