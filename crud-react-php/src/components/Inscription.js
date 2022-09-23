import { useState } from "react";
import "../assets/style/inscription.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SetCookie from "./cookie/SetCookie";
import RemoveCookie from "./cookie/RemoveCookie";
import {Link} from 'react-router-dom';

// import jwt_decode from "jwt-decode";
import GetCookie from "./cookie/GetCookie";
import Container from 'react-bootstrap/Container';
// btn
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Inscription() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/test/api-php-natif/api/user/create.php', inputs).then(function (response) {
            console.log(response.data);
            if (response.data.message === "user Created") {
                axios.post('http://localhost/test/api-php-natif/api/user/authentification.php', inputs)
                    // axios.post('http://localhost/test/api-php-natif/jwt-auth', inputs)
                    .then(function (response) {
                        let data = response.data;
                        let note;
                        let noteLocation = document.getElementById('note');
                      
                       
                        if (data && data.status === 1) {
        
        
                            RemoveCookie('logged');
        
        
                            switch (data.type) {
                                case 1:
                                    console.log("Admin / admin");
                                    console.log(data.type);
                                    data = JSON.stringify(data)
                                    SetCookie('logged', data);
        
                                    navigate('/organisation/2/create');
                                    break;
                                case 2:
                                    console.log("client / participant");
                                    console.log(data.type);
                                    data = JSON.stringify(data)
                                    SetCookie('logged', data);
        
                                    navigate('/services/participant');
                                    break;
        
                                default:
                                    note = "Nous ne savons si vous ête organisateur ou participant";
                                    navigate('./');
                                    break;
        
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
            navigate('/');
        });

    }
    return (
        <Container>
            <div className="inscription-form-container">
            <div className="inscription-form">

                <h1 className="form-title">Inscription</h1>
                <form className="Inscription-form" onSubmit={handleSubmit}>

                    <div className="full">
                        <div className="half">
                            <label>Nom </label></div>
                        <div className="half">
                            <label>Prenom </label>
                        </div>
                    </div>

                    <div className="full">
                        <div className="half">
                            <input type="text" name="fname" onChange={handleChange} />
                        </div>
                        <div className="half">
                            <input type="text" name="lname" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="full">
                        <label>E-mail </label>
                    </div>

                    <div className="full">
                        <input type="text" name="email" onChange={handleChange} />
                    </div>

                    <div className="full">
                        <label>Mot de passe </label>
                    </div>

                    <div className="full">
                        <input type="text" name="password" onChange={handleChange} />
                    </div>

                    <div className="full">
                        <label>Telephone </label>
                    </div>

                    <div className="full">
                        <input type="text" name="tel" onChange={handleChange} />
                    </div>

                    <div className="full">
                        <label for="type">
                            Vous êtes organisateur ou participant ?
                        </label>
                    </div>

                    <div className="full">
                        <select className="full" name="type" onChange={handleChange}>
                            <option value="">veillez selectioner</option>
                            <option value="1">Organisateur</option>
                            <option value="2">Participant</option>
                        </select>
                    </div>
                    <div className="form-btn-div">
                        <Button type="submit" className="form-btn">Enregistrer</Button>
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
