import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditOrganisation() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/test/api-php-natif/api/organisation/read_single.php?id=${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(value);
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost/test/api-php-natif/api/organisation/update.php/?id=${id}`, inputs).then(function(response){
            console.log(response.data);
            navigate('/organisation/list');
        });
        
    }
    return (
        <div>
            <h1>Edit user</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                    <tr>
                            <th>
                                <label>name: </label>
                            </th>
                            <td>
                                <input value={inputs.name} type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>activites: </label>
                            </th>
                            <td> 
                                <input value={inputs.activites} type="text" name="activites" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>adresse: </label>
                            </th>
                            <td>
                                <input value={inputs.adresse} type="text" name="adresse" onChange={handleChange} />
                            </td>
                        </tr>
                       
                        <tr>
                            <th>
                                <label>crée par: </label>
                            </th>
                            <td>
                                <input value={inputs.creator_id} type="text" name="creator_id" onChange={handleChange} />
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
