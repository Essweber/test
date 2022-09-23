
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
library.add(faUser, faEnvelope, faLock);

let id;
let user;
if (GetCookie('id')) {
  id = GetCookie('id');
  if (id != 2) {
    console.log('sorry you are not ...');
  } else {
    console.log('welcome');

  }
}


export default function OrganisationTotalDashboard() {

  const navigate = useNavigate();
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

  if (GetCookie('logged')) {
  user = JSON.parse(GetCookie('logged'));
  if (user.type != 1) {
    console.log('sorry you are not ...');
    navigate('/connexion');
  } else {
    console.log('welcome');

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

      <div>
        <Button href="/event/create" variant="primary">Créer un évènement</Button>
      </div>
      <div>
      <table>
        <thead>
           <tr>
            <th>Evènement</th>
            <th>Inscription standard</th>
            <th>Inscription VIP</th>
            <th>Recette</th>
           </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
            </tr>
        </tbody>
    </table>
      </div>
    </div>
  )
   }
}
else{
  console.log('no session found ...');
  navigate('/connexion');
}
}
