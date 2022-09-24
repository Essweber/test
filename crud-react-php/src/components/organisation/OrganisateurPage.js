import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RemoveCookie from ".././cookie/RemoveCookie";
import GetCookie from ".././cookie/GetCookie";
import Button from 'react-bootstrap/Button';
import paypal from "../../assets/images/logo-paypal.webp";
import eazyevent from "../../assets/images/logo-eazyevent.webp";
import "../../assets/style/home.css";
import Carousel from 'react-bootstrap/Carousel';
// Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Component }  from 'react';
// btn
import Card from 'react-bootstrap/Card';

export default function OrganisateurPage() {

     const handleClick = (event) => {
        console.log('clickk btn');
if(GetCookie('logged')){

}
        // const name = event.target.name;
        // const value = event.target.value;
    }

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
            <h1>Organisateur</h1>
          <Button onClick={handleClick} variant="primary">Creer un profil</Button>
          {/* <Button href="/organisation/create" variant="primary">Creer un profil</Button> */}

            <h1>En quoi nous pouvons vous aider</h1>
            <p>
                Vous organisez une conférence, une formation, un concert, un match de foot ou tout autre évènement
                ; nous voyons simplement de quoi vous disposez et nous vous proposons le reste selon vos désirs.
            </p>
            <p>
                Pour commencer vous devez créer votre profil sur notre site, en suite nous allons vous suivre étape par
                étape jusqu’à votre satisfaction.
            </p>

            <h1>Comment est-ce-que nous le faisons concrètement ?</h1>
            <p>
                Nous proposons un ensemble d’éléments nécessaire pour un évènement et vous choisissez ce qui
                vous est nécessaire
            </p>

            <section className="organisateur-section organisateur-section-1">
                <div className="organisateur-section-1-content">
                    <div className="organisateur-section-1-img">
                    <img src="" alt="" />
                    </div>
                    <div className="organisateur-section-1-text">
                        <h2>Un lieu pour votre évènement</h2>
                        <p>
                            Dans l’organisation de votre évènement quel
                            qu’il soit, vous ne parvenez pas à trouver un
                            endroit confortable, pas de soucis nous nous
                            chargeons de vous trouver l’endroit exact qu’il
                            vous faut. une salle de conférence par
                            exemple.
                        </p>
          <Button href="user/inscription" variant="primary">Demander un devis</Button>

                    </div>
                </div>
            </section>


        </div>
    )
}
