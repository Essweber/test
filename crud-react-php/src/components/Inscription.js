import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SetCookie from "./cookie/SetCookie";
import RemoveCookie from "./cookie/RemoveCookie";
// import jwt_decode from "jwt-decode";
import GetCookie from "./cookie/GetCookie";

export default function Inscription() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/test/api-php-natif/api/user/create.php', inputs).then(function(response){
            console.log(response.data);
            if (response.data.message === "user Created") {
                axios.post('http://localhost/test/api-php-natif/api/user/authentification.php', inputs)
            // axios.post('http://localhost/test/api-php-natif/jwt-auth', inputs)
            .then(function (response) {
                let data = response.data;
                if (data) {


                    RemoveCookie('logged');


                    switch (data.type) {
                        case 1:
                            console.log("Admin / admin");
                            console.log(data.type);
                            data = JSON.stringify(data)
                            SetCookie('logged', data);

                            navigate('/services/organisateur/dashboard');
                            break;
                        case 2:
                            console.log("client / participant");
                            console.log(data.type);
                            data = JSON.stringify(data)
                            SetCookie('logged', data);

                            navigate('/services/participant');
                            break;

                        default:
                            navigate('./');
                            break;

                    }
                    //     

                    //     const user = GetCookie('logged');
                    //     console.log(user);
                    //     // let decoded = jwt_decode.decode(user);
                    //     //  console.log(decoded);
                    //     navigate('/services/participant');
                    //     

                } else {

                    console.log("client");
                    // alert( 'sorry !!!')
                }


            })
            .catch(error => console.log(error));
            }
            navigate('/');
        });
        
    }
    return (
        <div>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>fname: </label>
                            </th>
                            <td>
                                <input type="text" name="fname" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>lname: </label>
                            </th>
                            <td> 
                                <input type="text" name="lname" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>email: </label>
                            </th>
                            <td>
                                <input type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>password: </label>
                            </th>
                           
                            <td>
                                <input type="text" name="password" onChange={handleChange} />
                            </td>
                        </tr>
                       
                        <tr>
                            <th>
                                <label>tel: </label>
                            </th>
                            <td>
                                <input type="text" name="tel" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                        <label for="type">
                            Vous êtes organisateur ou participant ?
                        </label>
                        </th>
                        <td>
                        <select name="type" onChange={handleChange}>
                            <option value="">--</option>
                            <option value="1">Organisateur</option>
                            <option value="2">Participant</option>
                        </select>
                        </td>
                    
                        </tr>

                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
