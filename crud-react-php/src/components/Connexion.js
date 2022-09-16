import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Connexion() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/test/api-php-natif/api/user/authentification.php', inputs)
        .then(function(response){
            console.log(response.data)
            
            navigate('/');
        })
        .catch(error => console.log(error));
        
    }
                
    return (
        <div>
            <h1>Connexion</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                       
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
