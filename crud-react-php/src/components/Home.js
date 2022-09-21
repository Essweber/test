


import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import paypal from "../assets/images/logo-paypal.png";
import eazyevent from "../assets/images/logo-eazyevent.png";
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

export default function Home() {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get('http://localhost/test/api-php-natif/api/user/read.php').then(function (response) {
      // console.log(response.data);
      setUsers(response.data);
    });
  }


  const handleSubmit = (event) => {
    event.preventDefault();


  };



  return (
    <div>
      <Navbar className="home_nav" collapseOnSelect expand="lg" variant="dark">
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
              <NavDropdown.Item href="/services/organisateur">Organisateur</NavDropdown.Item>
              <NavDropdown.Item href="/services/participant">Participant</NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
              <Button className="btn-transparent" href="inscription" variant="primary">Inscription</Button>
              <Button className="btn-white" href="Connexion" variant="primary">Connexion</Button>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>

      {/* <div className="home-header"> */}

      {/* <div></div> */}
      <Carousel >
        <Carousel.Item interval={2000}>
          
          <img
            className="d-block"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
          <div className="welcome-text"><h1>Nous gérons tout ce qui concerne l'évènementiel</h1></div>
            {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block"
            src={slide2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="welcome-text"><h1>Nous gérons tout ce qui concerne l'évènementiel</h1></div>
            {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block"
            src={slide3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="welcome-text"><h1>Nous gérons tout ce qui concerne l'évènementiel</h1></div>
            {/* <h3>Third slide label</h3>

                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* </div> */} <Container>
      <div className="home-content">


        <Card className="home-card">
          <Card.Body >
            <Card.Title>Organisateur</Card.Title>
            <Card.Text>
            Nous collaborons avec plusieurs
partenaires pour l’organisation et la
réussite de votre évènement
            </Card.Text>
            <Button className="btn-transparent card-btn" href="/services/organisateur" variant="primary">Voir plus</Button>
          </Card.Body>
        </Card>

        <Card className="home-card">
          <Card.Body>
            <Card.Title>Participant</Card.Title>
            <Card.Text>
            Nous exposons les évènements
disponibles et des tickets de
participation que vous pouvez
acheter
            </Card.Text>
            <Button className="btn-transparent card-btn" href="/services/participant" variant="primary">voir plus</Button>
          </Card.Body>
        </Card>
        
      </div>
 
      <div className="form-container">
        <h1 className="form-title">N’hésitez pas à nous contacter</h1>
        <form action="" className="contact-form" onSubmit={handleSubmit}>
          <div className="inputs">
            <input className="contact-input" type="text" placeholder="Nom" />
            <input className="contact-input" type="text" placeholder="Prenom" />
            <input className="contact-input" type="text" placeholder="Email" />
            <input className="contact-input contact-btn" type="submit" value={"Envoyer"} />
          </div>
          <div className="contact-texterea">
            <textarea className="contact-msg" name="message" id="" cols="30" rows="10" placeholder="Votre message"></textarea>
          </div>
        </form>
      </div>
</Container>
<div className="footer-container">


<Container>
  <div className="footer-content">
    <div className="footer-column">
      <h3>Qui somme nous ?</h3>
      <span>
      Nous collaborons avec plusieurs
partenaires pour l’organisation et la
réussite de votre évènement
      </span>

      <h3>Moyens de paiement</h3>
      <div className="logopaypal">
      <img
            src={paypal}
            alt="First slide"
          />
      </div>
      <span>
      Nous collaborons avec plusieurs
partenaires pour l’organisation et la
réussite de votre évènement
      </span>
    </div>
    <div className="footer-column">
    <h3>Nos perspectives</h3>
      <span>
      Nous collaborons avec plusieurs
partenaires pour l’organisation et la
réussite de votre évènement collaborons avec plusieurs
partenaires pour l’organisation et la
réussite de votre évènement
      </span>
    </div>
    <div className="footer-column">
    <h3>Nos coordonnées</h3>
      <span>
      Nous collaborons avec plusieurs
partenaires pour l’organisation et la
réussite de votre évènement
      </span>
    </div>
  </div>
</Container>
    </div>
    </div>
  )
}
