import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Inscription from './components/Inscription';
import Home from './components/Home';
import ListUser from './components/ListUser';
// import EditUser from './components/EditUser';


function App() { 

  return (
    <div className="App">

    <BrowserRouter>
    <header className='App-header'>
    <div className="">
      <Link to='/'>EAZYEVENT</Link>
</div>
    <nav>
      <ul>
        <li><Link to='/'>A propos</Link></li>
        <li><Link to='/'>services</Link></li>
        <li><Link to='/'>Contact</Link></li>
        <li><Link to='/users'>List users</Link></li>
        <li></li>
        {/* <li><Link to='user/inscription'>edit users</Link></li> */}
      </ul>
    </nav>
    <div className="">
    <Link to='/user/inscription'>Inscription</Link>
      <Link to='/user/connexion'>connexion</Link>
</div>
    </header>
    <Routes>
      <Route index element={<Home />} />
      <Route path='user/inscription' element={<Inscription />} />
      <Route path='/users' element={<ListUser />} />
    
    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
