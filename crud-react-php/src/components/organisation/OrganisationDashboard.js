


import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


// Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// btn
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function OrganisationDashbord() {

      const navigate = useNavigate();
    const [organisation, setOrganisation] = useState([]);
    useEffect(() => {
        getOrganisation();
    }, []);
    // }, []);

    function getOrganisation() {
        axios.get(`http://localhost/test/api-php-natif/api/user/read_single.php`).then(function (response) {
        // axios.get(`http://localhost/test/api-php-natif/api/user/read_single.php?id=${id}`).then(function (response) {
            // console.log(response.data);
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
                </div>
              
                </div>
    )
}
