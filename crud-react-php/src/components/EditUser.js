import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/test/api-php-natif/api/user/read_single.php?id=${id}`).then(function(response) {
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

        axios.put(`http://localhost/test/api-php-natif/api/user/update.php/?id=${id}`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
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
                                <label>fname: </label>
                            </th>
                            <td>
                                <input value={inputs.fname} type="text" name="fname" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>lname: </label>
                            </th>
                            <td> 
                                <input value={inputs.lname} type="text" name="lname" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>email: </label>
                            </th>
                            <td>
                                <input value={inputs.email} type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>password: </label>
                            </th>
                            <td>
                                <input value={inputs.password} type="text" name="password" onChange={handleChange} />
                            </td>
                        </tr>
                       
                        <tr>
                            <th>
                                <label>tel: </label>
                            </th>
                            <td>
                                <input value={inputs.tel} type="text" name="tel" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>type: </label>
                            </th>
                            <td>
                                <input value={inputs.type} type="text" name="type" onChange={handleChange} />
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
