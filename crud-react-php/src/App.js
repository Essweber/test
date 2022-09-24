import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import React, { Component }  from 'react';

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
import OrganisationTotalDashboard from './components/organisation/OrganisationTotalDashboard';


// EVENTS
import CreateEvent from './components/organisation/event/CreateEvent';
import EditEvent from './components/organisation/event/EditEvent';
import EventPage from './components/organisation/event/EventPage';
import ListEvent from './components/organisation/event/ListEvent';


// DEMANDES
import Demande from './components/organisation/event/Demande';

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
      <Route path='/organisation/:id/create' element={<CreateOrganisation />} />
      <Route path='/organisation/list' element={<ListOrganisation />} />
      <Route path='/organisation/:id/edit' element={<EditOrganisation />} />
      <Route path='/services/organisateur/dashboard/total' element={<OrganisationTotalDashboard />} />

      {/* EVENTS */}
      <Route path='/event/create' element={<CreateEvent />} />
      <Route path='/event/edit' element={<EditEvent />} />
      <Route path='/event/:id/demande' element={<Demande />} />
      
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