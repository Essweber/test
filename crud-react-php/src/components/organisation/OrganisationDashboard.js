import GetCookie from "../cookie/GetCookie";
// Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../assets/style/dashboard.css";
// btn
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import eazyevent from "../../assets/images/logo-eazyevent.webp";

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
import { faCode, faHighlighter, fas } from '@fortawesome/free-solid-svg-icons';

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
  // const {user_id} = useParams();
  let user;
  let user_id;
  if (GetCookie('logged')) {
    user = JSON.parse(GetCookie('logged'));
    user_id = user.id;
  }

  const [organisation, setOrganisation] = useState([]);
  useEffect(() => {

    getOrganisation();
  }, []);



  function getOrganisation() {
    // axios.get(`http://localhost/test/api-php-natif/api/user/read_single.php`).then(function (response) {
    axios.get(`http://localhost/test/api-php-natif/api/organisation/read_single.php?user_id=${user_id}`).then(function (response) {
      console.log(response.data);
      setOrganisation(response.data);
      // const data = response.data;
    });
  }
  if (user) {
    if (user.type != 1) {
      console.log('sorry you are not ...');
      navigate('/connexion');
    } else {

      return (
        <div>
          <Navbar className="home_nav" collapseOnSelect expand="lg" variant="dark">
            {/* <Container> */}
            <Navbar.Brand className="home_nav_logo" href="/">
            <div className="lg">
            <img
            className="home-logo"
            src={eazyevent}
            alt="First slide"
          />
          EazyEvent
        </div>
            </Navbar.Brand>


          


                <a className="organisation-profil-link" href="/services/organisateur/dashboard">
                  <div className="navbarr-infos">
                    <div className="navbarr-infos-organisation">
                      {organisation.name}
                    </div>
                    <div className="navbarr-infos-user">
                      {organisation.creator_fname} {organisation.creator_lname}

                    </div>
                  </div>
                  <div className="navbarr-icon">
                    <FontAwesomeIcon icon="fa-solid fa-address-book" />
                  </div>
                </a>
            {/* </Container> */}
          </Navbar>


          <div className="organisation-container">
            <div className="organisator-infos-container">
              <section className="organisator-section1">
                <div className="organisator-section1-icon">
                  <FontAwesomeIcon icon="fa-solid fa-address-book" />
                </div>
                <div className="organisator-section1-infos">


                  <div className="bgc">Organisation : {organisation.name}</div>
                  <div className="no-bgc">Secteur d'activité : {organisation.activites}</div>
                  <div className="bgc">Nom : {organisation.creator_fname}</div>
                  <div className="no-bgc">Prenom : {organisation.creator_lname}</div>
                  <div className="bgc">Email : {organisation.creator_email}</div>
                  <div className="no-bgc">Téléphone : {organisation.id}</div>
                  <div className="form-btn-div">
                    <Button className="form-btn" type="submit" href={`/organisation/${organisation.id}/edit`} variant="primary">Modifier</Button>
                  </div>
                </div>
              </section>
            </div>
          </div>


          <section className="section2">
            <div className="section2-container">
              <div className="section2-card">

                <div className="section2-card-top-separate">
                  <div className="section2-card-icon">
                    <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
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
                  <Button className="form-btn" href="/services/participant" variant="primary">voir plus</Button>
                </div>
              </div>
              <div className="section2-card">

                <div className="section2-card-top-separate">
                  <div className="section2-card-icon">
                  <FontAwesomeIcon icon="fa-solid fa-ticket" />
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
                  <Button className="form-btn" href="/services/participant" variant="primary">voir plus</Button>
                </div>
              </div>
              <div className="section2-card">

                <div className="section2-card-top">
                  <div className="section2-card-icon">
                  <FontAwesomeIcon icon="fa-solid fa-ticket-simple" />
                  </div>

                  <div className="section2-card-title">
                    Tickets retants
                  </div>

                  <div className="section2-card-nbr">
                    14 000
                  </div>
                </div>

                <div className="section2-card-txt">
                  <div>Vous pouvez créer un évènement</div>
                  <Button className="form-btn" href="/services/organisateur/dashboard/total" variant="primary">voir plus</Button>
                </div>
              </div>
            </div>
            <div className="section2-bottom">
              <div>vous pouvez voir vos devis ici ceux qui sont en cours de traitement et ceux qui sont déjà traités</div>
              <Button className="form-btn" href="/services/participant" variant="primary">consulter</Button>
            </div>
          </section>

          <section className="section3">

          </section>


        </div>
      )
    }
  }
  else {
    console.log('no session found ...');
    navigate('/connexion');
  }


}
