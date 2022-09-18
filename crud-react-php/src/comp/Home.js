


import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hme_head from "../assets/hme_head.JPG";
import "../assets/style/home.css";
import { useNavigate } from "react-router-dom";

// btn
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {

      const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/test/api-php-natif/api/user/read.php').then(function (response) {
            // console.log(response.data);
            setUsers(response.data);
        });
    }


const handleSubmit = (event) => {
        event.preventDefault();

        if(1==1){
            console.log('cool');
            
            navigate('/');
        }else{
            console.log('sory');
        }
        };



    return (
        <div>
            <div className="home-header">

                {/* <div></div> */}
                <div className="welcome-img"><img src={hme_head} alt="" /></div>
                <div className="welcome-text"><h1>Nous gérons tout ce qui concerne l'évènementiel</h1></div>
            </div>
            <div className="home-content">

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Organisateur</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button href="/services/organisateur" variant="primary">Voir plus</Button>
                    </Card.Body>
                </Card>
               
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Participant</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button href="/services/participant" variant="primary">voir plus</Button>
                    </Card.Body>
                </Card>
                </div>

                <div className="form-container">
                    <h1>N’hésitez pas à nous contacter</h1>
                    <form action="" className="contact-form" onSubmit={handleSubmit}>
                        <div className="inputs">
                        <input type="text" placeholder="Nom" />
                        <input type="text" placeholder="Prenom" />
                        <input type="text" placeholder="Email" />
                        <input type="submit" value={"Envoyer"}/>
                        </div>
                        <div className="texterea">
                            <textarea name="message" id="" cols="30" rows="10"></textarea>
                        </div>
                    </form>
                </div>



        </div>
    )
}
