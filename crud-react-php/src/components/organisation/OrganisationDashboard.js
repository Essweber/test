import GetCookie from "../cookie/GetCookie";


// Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// btn
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
// import the library
// import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
// import { faMoneyBill } from '@fortawesome/pro-solid-svg-icons';
import { faCode, faHighlighter,fas } from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  fas,
  faCode,
  faHighlighter
  // more icons go here
);
library.add(faUser, faEnvelope, faLock);


export default function OrganisationDashbord() {


  const navigate = useNavigate();
  let id;
let user;
if (GetCookie('logged')) {
  user = JSON.parse(GetCookie('logged'));

  console.log(user.email);
  if (user.type != 1) {
    console.log('sorry you are not ...');
    navigate('/');
  } else {
    console.log('welcome');

  }
}



  const [organisation, setOrganisation] = useState([]);
  useEffect(() => {
    getOrganisation();
  }, []);

  function getOrganisation() {
    // axios.get(`http://localhost/test/api-php-natif/api/user/read_single.php`).then(function (response) {
    axios.get(`http://localhost/test/api-php-natif/api/user/read_single.php?id=${id}`).then(function (response) {

      setOrganisation(response.data);
    });
  }


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">EazyEvent</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: MTC
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div className="home-content">
        <div className="organisator-infos-container">
          <section className="organisator-section1">
            <div className="organisator-section1-icon">
            <FontAwesomeIcon icon="fa-solid fa-address-book" />
            </div>
            <div className="organisator-section1-infos">


              <div>Organisation : { }</div>
              <div>Secteur d'activité : { }</div>
              <div>Nom : {organisation.fname}</div>
              <div>Prenom : {organisation.lname}</div>
              <div>Email : {organisation.email}</div>
              <div>Téléphone : {organisation.tel}</div>
              <Button href={`/organisation/${organisation.id}/edit`} variant="primary">Edit</Button>

            </div>
          </section>

          <FontAwesomeIcon icon="fa-solid fa-calendar-days" />

          <section className="section2">
            <div className="section2-card">
          
              <div className="section2-card-top">
                <div className="section2-card-icon">
                  <FontAwesomeIcon icon="fa-solid fa-calendar-clock" />
                </div>

                <div className="section2-card-title">
                  Evènements
                </div>

                <div className="section2-card-nbr">
                  14 000
                </div>
              </div>

              <div className="section2-card-txt">
                <div>Vous pouvez créer un évènement</div>
                <Button href="/services/participant" variant="primary">voir plus</Button>
              </div>
            </div>
            <div className="section2-card">

              <div className="section2-card-top">
                <div className="section2-card-icon">
                  <FontAwesomeIcon icon="fa-solid fa-user" />
                </div>

                <div className="section2-card-title">
                  Tickets vendus
                </div>

                <div className="section2-card-nbr">
                  14 000
                </div>
              </div>

              <div className="section2-card-txt">
                <div>Vous pouvez Ajouter des tickets</div>
                <Button href="/services/participant" variant="primary">voir plus</Button>
              </div>
            </div>
            <div className="section2-card">

              <div className="section2-card-top">
                <div className="section2-card-icon">
                  <FontAwesomeIcon icon="fa-solid fa-user" />
                </div>

                <div className="section2-card-title">
                  Evènements
                </div>

                <div className="section2-card-nbr">
                  14 000
                </div>
              </div>

              <div className="section2-card-txt">
                <div>Vous pouvez créer un évènement</div>
                <Button href="/services/organisateur/dashboard/total" variant="primary">voir plus</Button>
              </div>
            </div>
          </section>

          <section className="section3">
                <div>vous pouvez voir vos devis ici ceux qui sont en cours de traitement et ceux qui sont déjà traités</div>
                <Button href="/services/participant" variant="primary">consulter</Button>
              </section>
        </div>
      </div>

    </div>
  )
}
