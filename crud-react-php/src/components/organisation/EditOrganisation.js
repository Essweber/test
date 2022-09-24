import { useState, useEffect } from "react";
import GetCookie from "../cookie/GetCookie";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { Component }  from 'react';

export default function EditOrganisation() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);
    const [user, setUser] = useState([]);
let logged;
let user_id;
if(GetCookie('logged')){
  logged = JSON.parse(GetCookie('logged'));
 user_id = logged.id;
}

    const {id} = useParams();

    useEffect(() => {
        getOrganisation();
    }, []);

    function getOrganisation() {
       
        axios.get(`https://api-eazyevent.herokuapp.com/api/organisation/read_single.php?id=${id}`).then(function (response) {
console.log(response.data);
      setInputs(response.data);
      // const data = response.data;
    });
    const creator_id = logged.id;
   
    axios.get(`https://api-eazyevent.herokuapp.com/api/user/read_single.php?id=${creator_id}`).then(function (response) {
console.log(response.data);
      setUser(response.data);
      // const data = response.data;
       console.log(user);
    });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(value);
        setInputs(values => ({...values, [name]: value}));
    } 
    const handleUser = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(value);
        setUser(values => ({...values, [name]: value}));
    } 
    // console.log(id);
    
    const handleSubmit = (event) => {
        event.preventDefault();
 

        axios.put(`http://localhost/test/api-php-natif/api/organisation/update.php/?id=${id}`, inputs).then(function(response){
            console.log(response.data);
        });
        
        axios.put(`http://localhost/test/api-php-natif/api/user/update.php/?id=${user.id}`, user).then(function(response){
            console.log(response.data);
            
        });
        navigate('/services/organisateur/dashboard');
    }
    
    if (logged) {
  if (logged.type != 1) {
    console.log('sorry you are not ...');
    navigate('/connexion');
  } else {
    return (
        <Container>
        <div className="inscription-form-container">
        <div className="inscription-form">

            <h1 className="form-title">Modifiez vos informations</h1>
            <form className="Inscription-form" onSubmit={handleSubmit}>

                <div className="full">
                    <div className="half">
                        <label for="fname">Nom </label></div>
                    <div className="half">
                        <label for="lname">Prenom </label>
                    </div>
                </div>

                <div className="full">
                    <div className="half">
                        <input type="text" value={user.fname} name="fname" onChange={handleUser} />
                    </div>
                    <div className="half">
                        <input type="text" value={user.lname} name="lname" onChange={handleUser} />
                    </div>
                </div>

                <div className="full">
                    <label>E-mail </label>
                </div>

                <div className="full">
                    <input type="text" value={user.email} name="email" onChange={handleUser} />
                </div>

                <div className="full">
                    <label>Ancien mot de passe </label>
                </div>

                <div className="full">
                    <input type="text" value={user.old_password} name="old_password" onChange={handleUser} />
                </div>

                <div className="full">
                    <label>Nouveau mot de passe </label>
                </div>

                <div className="full">
                    <input type="text" value={user.new_password} name="new_password" onChange={handleUser} />
                </div>

                <div className="full">
                    <label>Confirmation mot de passe </label>
                </div>

                <div className="full">
                    <input type="text" value={user.confirm_password} name="confirm_password" onChange={handleUser} />
                </div>

                <div className="full">
                    <label>Telephone </label>
                </div>

                <div className="full">
                    <input type="text" value={user.tel} name="tel" onChange={handleUser} />
                </div>




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
    )  }
}
else{
  console.log('no session found ...');
  navigate('/connexion');
}

}
