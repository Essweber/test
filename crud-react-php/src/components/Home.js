


import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hme_head from "../assets/hme_head.JPG";
import "../assets/style/home.css";

export default function Home() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/test/api-php-natif/api/user/read.php').then(function (response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    
    return (
        <div>
            <div className="home-header">

                {/* <div></div> */}
                <div className="welcome-img"><img src={hme_head} alt="" /></div>
                <div className="welcome-text"><h1>Nous gérons tout ce qui concerne l'évènementiel</h1></div>
            </div>
            <div className="home-content">
                <div >
                    <h1>Organisateur</h1>
                    <p>Lorem, dolorem quas reiciendis, rerum culpa quo vel. Voluptatibus unde rerum explicabo quaerat, quis accusantium sunt, est placeat commodi expedita omnis!</p>
                    <Link to={"/services/organisateur"}>voir</Link>
                </div>
                <div>
                    <h1>Organisateur</h1>
                    <p>Lorem, dolorem quas reiciendis, rerum culpa quo vel. Voluptatibus unde rerum explicabo quaerat, quis accusantium sunt, est placeat commodi expedita omnis!</p>
                    <Link to={"/services/participant"}>voir</Link>
                </div>
            </div>

        </div>
    )
}
