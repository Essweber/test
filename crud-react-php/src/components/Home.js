import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/test/api-php-natif/api/user/read.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/test/api-php-natif/api/user/delete.php/${id}`).then(function(response){
            // console.log(id);
            getUsers();
        });
    }
    return (
        <div>
            <h1>Nous gérons tout ce qui concerne l'évènementiel</h1>
            
        </div>
    )
}
