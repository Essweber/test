import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import GetCookie from "../cookie/GetCookie";
import Container from 'react-bootstrap/Container';
// btn
import Button from 'react-bootstrap/Button';
export default function CreateOrganisation() {
    const navigate = useNavigate();

    let user;
    let user_id;

     let note;
    let noteLocation = document.getElementById('note');
    if (GetCookie('logged')) {
        user = JSON.parse(GetCookie('logged'));
        user_id = user.id;

        const [inputs, setInputs] = useState([]);

        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({ ...values, [name]: value }));
        }
        const handleSubmit = (event) => {
            event.preventDefault();

            // axios.post(`https://api-eazyevent.herokuapp.com/api/organisation/create.php/?creator_id=1`, inputs).then(function(response){
            axios.post(`http://localhost/test/api-php-natif/api/organisation/create.php/?creator_id=${user_id}`, inputs).then(function (response) {
                console.log(response.data);

                if (response.data.message === "organisation already in server") {
                    console.log('org deja');
                    note = "il y a déjà un profil en ce nom ; essayez avec un autre nom"
                }
                if (response.data.message === "organisation created"){
                  navigate('/services/organisateur/dashboard');   
                }
               
                 if(note){
                        noteLocation.innerHTML=note;
                  }
            });

        }
      
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
                                            <input type="text" required value={inputs.name} name="name" onChange={handleChange} />
                                        </div>
                                        <div className="half">
                                            <input type="text" required value={inputs.adresse} name="adresse" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="full">
                                        <label for="activites">
                                            Secteur d'activités
                                        </label>
                                    </div>

                                    <div className="full">
                                        <input type="text" required value={inputs.activites} name="activites" onChange={handleChange} />
                                    </div>

                                    <div className="form-btn-div">
                                        <Button type="submit" className="form-btn">Créer</Button>
                                    </div>

                                </form>
 <div id="note">

                        </div>
                            </div>
                            
                        </div>
                    </Container>
                )
            }
    }
    else {
        console.log('no session found ...');
        navigate('/connexion');
    }
}
