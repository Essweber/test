import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateOrganisation() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/test/api-php-natif/api/organisation/create.php', inputs).then(function(response){
            console.log(response.data);
            navigate('/services/organisateur/dashboard');
        });
        
    }
    return (
        <div>
            <h1>créez votre organisation</h1>
            <form onSubmit={handleSubmit}>
                
                                <label>nom: </label>
                           
                                <input type="text" name="name" onChange={handleChange} />
                         
                                <label>secteur d'activités: </label>
                          
                                <input type="text" name="activites" onChange={handleChange} />
                        
                                <label>adresse: </label>
                          
                                <input type="text" name="adresse" onChange={handleChange} />
                           
                                <label>créé par: </label>
                          
                                <input type="text" name="creator_id" onChange={handleChange} />
                           
                       

                     
                                <button>Save</button>
                      
            </form>
        </div>
    )
}
