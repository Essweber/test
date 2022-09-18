import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';


// HOME
import Home from './components/Home';
import Inscription from './components/Inscription';
import Connexion from './components/Connexion';
import ParticipantPage from './components/participant/ParticipantPage';
import OrganisateurPage from './components/organisation/OrganisateurPage';


// PARTICIPANT
import ListUser from './components/participant/ListUser';
import EditUser from './components/participant/EditUser';



// ORGANISATION
import CreateOrganisation from './components/organisation/CreateOrganisation';
import ListOrganisation from './components/organisation/ListOrganisation';
import EditOrganisation from './components/organisation/EditOrganisation';
import DashboardOrganisateur from './components/organisation/OrganisationDashboard';

// Navbar
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// BTN BOOTSTRAP
import Button from 'react-bootstrap/Button';




function App() { 

  return (
    <div className="App">


    <>
    
    {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">EazyEvent</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">A propos</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/services/organisateur">Organisateur</NavDropdown.Item>
              <NavDropdown.Item href="/services/participant">Participant</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Autre
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Button href="inscription" variant="primary">Inscription</Button>
          <Button href="Connexion" variant="primary">Connexion</Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

    </>



    <BrowserRouter>
    <header className='App-header'>
    <div className=""></div>
 
    </header>
    <Routes>
      <Route index element={<Home />} />
      <Route path='inscription' element={<Inscription />} />
      <Route path='connexion' element={<Connexion />} />
      <Route path='/user' element={<ListUser />} />
      <Route path='/services/organisateur' element={<OrganisateurPage />} />
      <Route path='/services/organisateur/dashboard' element={<DashboardOrganisateur />} />
      <Route path='/services/participant' element={<ParticipantPage />} />
      <Route path='user/:id/edit' element={<EditUser />} />

      {/* ORGANISATION */}
      <Route path='/organisation/create' element={<CreateOrganisation />} />
      <Route path='/organisation/list' element={<ListOrganisation />} />
      <Route path='/organisation/list/:id/edit' element={<EditOrganisation />} />
      
    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;





// <nav>
// <Link to='/'>EAZYEVENT</Link>








// <ul>
//   <li><Link to='/'>A propos</Link></li>
//   <li><Link to='/services/organisateur'>organisateur</Link></li>
//   <li><Link to='/services/participant'>Participant</Link></li>
//   <li><Link to='/'>Contact</Link></li>
//   <li><Link to='/user'>List users</Link></li>
//   <li><Link to='/organisation/list'>organisations</Link></li>
//   <li></li>
//   {/* <li><Link to='user/inscription'>edit users</Link></li> */}
// </ul>

// <div className="">
// <Link to='/user/inscription'>Inscription</Link>
// <Link to='/user/connexion'>connexion</Link>
// </div>
// </nav>