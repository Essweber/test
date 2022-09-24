


import axios from "axios"
import { useEffect, useState } from "react";
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
            <Nav.Link href="#">A propos</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item >Services</NavDropdown.Item>
              <NavDropdown.Item href="/services/organisateur">Organisateur</NavDropdown.Item>
              <NavDropdown.Item href="#">Participant</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Button className="btn-transparent" href="/inscription" variant="primary">Inscription</Button>
          <Button className="btn-white" href="/Connexion" variant="primary">Connexion</Button>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>


      {/* ******************************SLIDERS */}

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
        <div className="home-description">
          <h3 className="form-title home-description-title">En quoi nous pouvons vous aider ?</h3>
          <div>Vous organisez une conférence, une formation, un concert, un match de foot ou tout autre évènement nous voyons simplement de quoi vous disposez et nous vous proposons le reste selon vos désirs. Pour commencer vous devez créer votre profil sur notre site, en suite nous allons vous suivre étape par étape jusqu’à votre satisfaction.</div>
        <br />
        <br />
          <h3 className="form-title home-description-title">Comment est-ce-que nous le faisons concrètement ?</h3>
          <div>Vous organisez une conférence, une formation, un concert, un match de foot ou tout autre évènement Nous proposons un ensemble d’éléments nécessaire pour un évènement et vous choisissez ce qui vous est nécessaire</div>
        </div>
        <div className="home-content">


          <Card className="home-card">
            <Card.Body >
              <Card.Title>Organisateur</Card.Title>
              <Card.Text>
                Nous collaborons avec plusieurs
                partenaires pour l’organisation et la
                réussite de votre évènement
              </Card.Text>
              <Button className="btn-transparent card-btn" href="/services/organisateur" variant="primary">Créer un profil</Button>
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
              <Button className="btn-transparent card-btn" variant="primary">voir plus</Button>
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
              <input className="contact-input contact-btn web" type="submit" value={"Envoyer"} />
            </div>
            <div className="contact-texterea">
              <textarea className="contact-msg" name="message" id="" cols="30" rows="10" placeholder="Votre message"></textarea>

              <input className="contact-input contact-btn phone" type="submit" value={"Envoyer"} />
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
