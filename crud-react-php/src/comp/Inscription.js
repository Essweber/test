import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Organisation_connexion() {
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
                                <label>type: </label>
                            </th>
                            <td>
                                <input type="text" name="type" onChange={handleChange} />
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
