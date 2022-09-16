import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Organisation_list() {

    const [organisations, setOrganisations] = useState([]);
    useEffect(() => {
        getOrganisations();
    }, []);

    function getOrganisations() {
        axios.get('http://localhost/test/api-php-natif/api/organisation/read.php').then(function(response) {
            console.log(response.data);
            setOrganisations(response.data);
        });
    }

    const deleteOrganisation = (id) => {
        axios.delete(`http://localhost/test/api-php-natif/api/organisation/delete.php/${id}`).then(function(response){
            // console.log(id);
            getOrganisations();
        });
    }
    return (
        <div>
            <h1>List Organisations</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>secteur d'activités</th>
                        <th>adresse</th>
                        <th>créé par</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {organisations.map((organisation, key) =>
                        <tr key={key}>
                            <td>{organisation.id}</td>
                            <td>{organisation.name}</td>
                            <td>{organisation.activites}</td>
                            <td>{organisation.adresse}</td>
                            <td>{organisation.creator_id}</td>
                             <td>
                                <Link to={`${organisation.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                               <button onClick={() => deleteOrganisation(organisation.id)}>Delete</button>
                           </td> 
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}
