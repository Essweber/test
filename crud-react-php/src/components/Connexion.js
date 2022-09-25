import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SetCookie from "./cookie/SetCookie";
import RemoveCookie from "./cookie/RemoveCookie";
// import jwt_decode from "jwt-decode";
import GetCookie from "./cookie/GetCookie";
import "../assets/style/connexion.css";
import Container from 'react-bootstrap/Container';
// btn
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import React, { Component }  from 'react';
export default function Connexion() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        console.log('submit');
        event.preventDefault();

        axios.post('http://localhost/test/api-php-natif/api/user/authentification.php', inputs)
            // axios.post('http://localhost/test/api-php-natif/jwt-auth', inputs)
            .then(function (response) {
                let data = response.data;
                console.log(data);
                let note;
                let noteLocation = document.getElementById('note');
              
               
                if (data && data.status === 1) {
RemoveCookie('logged');
data = JSON.stringify(data)
                            SetCookie('logged', data);

                    
 console.log(data.organisation_profil);
                    if (data.organisation_profil === 'true') {
                       
                         switch (data.type) {
                        case 1:
                           navigate('/services/organisateur/dashboard');
                            break;
                        case 2:
                           navigate('/services/participant');
                            break;

                        default:
                            note = "Nous ne savons si vous ête organisateur ou participant";
                            navigate('./');
                            break;

                    }
                    }

                    else {
                        console.log("no profil ");
                        navigate('/organisation/create');
                    }
                  
                } else {

                    note = "Vérifiez vos informations et réessayez";
                }

                if(note){
                    noteLocation.innerHTML=note;
              }


            })
            .catch(error => console.log(error));

    }

    return (
        <div>


            <Container>
                <div className="connexion-form-container">
                    <div className="connexion-form">
                        <h1 className="form-title">Connexion</h1>
                        <form onSubmit={handleSubmit}>

                            <div className="full">

                            </div>
                            <div className="full">
                                <label>email: </label>
                            </div>
                            <div className="full">
                                <input type="email" required name="email" onChange={handleChange} />
                            </div>
                            <div className="full">
                                <label>password: </label>
                            </div>
                            <div className="full">
                                <input type="password" required name="password" onChange={handleChange} />
                            </div>
                            <div className="form-btn-div">
                                <Button type="submit" className="form-btn">Envoyer</Button>
                            </div>
                            <div id="note">
                           
                            </div>
                            <div className="form-btn-div">
                           si vous n'avez pas de compte, <Link to='/inscription'>inscrivez vous ici</Link>
                            </div>
                           

                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}
