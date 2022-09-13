import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import ListUser from './components/ListUser';
import EditUser from './components/EditUser';


function App() { 

  return (
    <div className="App">
      <h5>React crud and php</h5>

    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to='/'>List users</Link></li>
        <li><Link to='user/create'>create users</Link></li>
        <li><Link to='user/edit'>edit users</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route index element={<ListUser />} />
      <Route path='user/create' element={<CreateUser />} />
      <Route path='user/:id/edit' element={<EditUser />} />
    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
