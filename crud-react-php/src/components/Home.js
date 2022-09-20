


import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
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
        <Navbar.Brand className="home_nav_logo" href="/">EazyEvent</Navbar.Brand>
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
          <Nav>
            <Button className="btn-transparent" href="inscription" variant="primary">Inscription</Button>
            <Button className="btn-white" href="Connexion" variant="primary">Connexion</Button>

          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>

      <div className="home-header">

        {/* <div></div> */}
        <div className="welcome-img">
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block"
                src={slide1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block"
                src={slide2}
                alt="Second slide"
              />
              <Carousel.Caption interval={2000}>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={slide3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="welcome-text"><h1>Nous gérons tout ce qui concerne l'évènementiel</h1></div>
          </div>
      
      </div>
      <div className="home-content">

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Organisateur</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button href="/services/organisateur" variant="primary">Voir plus</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Participant</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button href="/services/participant" variant="primary">voir plus</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="form-container">
        <h1>N’hésitez pas à nous contacter</h1>
        <form action="" className="contact-form" onSubmit={handleSubmit}>
          <div className="inputs">
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prenom" />
            <input type="text" placeholder="Email" />
            <input type="submit" value={"Envoyer"} />
          </div>
          <div className="texterea">
            <textarea name="message" id="" cols="30" rows="10"></textarea>
          </div>
        </form>
      </div>



    </div>
  )
}
