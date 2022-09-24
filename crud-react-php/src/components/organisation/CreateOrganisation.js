import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, { Component }  from 'react';
import GetCookie from "../cookie/GetCookie";
import Container from 'react-bootstrap/Container';
// btn
import Button from 'react-bootstrap/Button';
export default function CreateOrganisation() {
    const navigate = useNavigate();

    let user;
let user_id;
if(GetCookie('logged')){
  user = JSON.parse(GetCookie('logged'));
 user_id = user.id;
}
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`https://api-eazyevent.herokuapp.com/api/organisation/create.php/?creator_id=1`, inputs).then(function(response){
            console.log(response.data);
            navigate('/services/organisateur/dashboard');
        });
        
    }
    if (user) {
  if (user.type != 1) {
    console.log('sorry you are not ...');
    navigate('/connexion');
  } else {
    return (
        <Container>
        <div className="inscription-form-container">
        <div className="inscription-form">

            <h1 className="form-title">Créez votre organisation</h1>
            <form className="Inscription-form" onSubmit={handleSubmit}>

                           <div className="full">
                    <div className="half">
                        <label>Organisation </label></div>
                    <div className="half">
                        <label>Adresse </label>
                    </div>
                </div>

                <div className="full">
                    <div className="half">
                       <input type="text" value={inputs.name} name="name" onChange={handleChange} />
                    </div>
                    <div className="half">
                        <input type="text" value={inputs.adresse} name="adresse" onChange={handleChange} />
                    </div>
                </div>

                <div className="full">
                    <label for="activites">
                      Secteur d'activités
                    </label>
                </div>

                          <div className="full">
                    <input type="text" value={inputs.activites} name="activites" onChange={handleChange} />
                </div>

                <div className="form-btn-div">
                    <Button type="submit" className="form-btn">Modifier</Button>
                </div>
                <div className="form-btn-div">
                       si vous avez déjà un compte, <Link to='/connexion'>connectez vous ici</Link>
                        </div>

            </form>

        </div>
        </div>
    </Container>
    ) 
  }
}
else{
  console.log('no session found ...');
  navigate('/connexion');
}
 }
