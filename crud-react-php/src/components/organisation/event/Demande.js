import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// btn
import Button from 'react-bootstrap/Button';

export default function Demande() {
    const navigate = useNavigate();
    const {event_id} = useParams();
    const event = 1;
    const [inputs, setInputs] = useState([]);
let check_location;
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
console.log(inputs);
         axios.post(`http://localhost/test/api-php-natif/api/demande/create.php?event_id=${event}`, inputs).then(function (response) {
            console.log(response.data);
            // navigate('/organisation/list');
        });
        
        if(inputs.check_ticket){

console.log(inputs.check_ticket.value);

        }else{
console.log(inputs.check_ticket);
        }

       

    }
    return (
        <div>
            <h1>Notre rôle</h1>
            <div className="">
                Cochez tout ce que vous voulez de notre site
            </div>
            <form onSubmit={handleSubmit}>



                <div className="full">
                    <label for="check_location">
                        <input type="checkbox" name="check_location" onChange={handleChange} />
                        <input type="hidden" name="event_id" value={1} onSubmit={handleChange} />
                        Lieu
                    </label>
                </div>


                <div className="full">
                    <div className="half">

                        <input type="text" name="location_region" placeholder="Région" onChange={handleChange} />

                    </div>
                    <div className="half">

                        <input type="text" name="location_prefecture" placeholder="Préfecture" onChange={handleChange} />

                    </div>

                </div>


                <div className="full">
                    <div className="half">

                        <input type="text" name="place_nbre" placeholder="Nombre de places" onChange={handleChange} />

                    </div>
                    <div className="half">

                        <input type="text" name="duration" placeholder="Duré d'occupation (en heures)" onChange={handleChange} />

                    </div>

                </div>
                <div className="full">
                    <textarea name="location_description" id="" cols="30" rows="10" placeholder="Description de vos attentes" onChange={handleChange}></textarea>

                </div>

                <div className="full">
                    <label for="check_actor">
                        <input type="checkbox" name="check_actor" onChange={handleChange} />
                        Un acteur
                    </label>
                </div>

                <div className="full">
                    <div className="half">

                        <input type="text" name="actor_title" placeholder="titre" onChange={handleChange} />

                    </div>
                </div>

                <div className="full">
                    <textarea name="actor_description" id="" cols="30" rows="10" placeholder="Description de vos attentes" onChange={handleChange}></textarea>

                </div>
                {/* <button >Ajouter un acteur</button> */}


                <div className="full">
                    <label for="check_gust">
                        <input type="checkbox" name="check_gust" onChange={handleChange} />
                        Deplacement de vos invités
                    </label>
                </div>

                <div className="full">
                    <div className="half">

                        <input type="text" name="gust_name" placeholder="Nom complet de l'invité" onChange={handleChange} />

                    </div>
                    <div className="half">

                        <input type="text" name="gust_contact" placeholder="Contact de l'invité" onChange={handleChange} />

                    </div>
                </div>


                <div className="full">
                    <div className="half">

                        <input type="text" name="gust_adresse" placeholder="Adresse de l'invité" onChange={handleChange} />

                    </div>
                    <div className="half">
                        {/* <button >Ajouter un invité</button> */}
                    </div>
                </div>


                <div className="full">
                    <label for="check_materiel">
                        <input type="checkbox" name="check_materiel" onChange={handleChange} />
                        Du matériel
                    </label>
                </div>

                <div className="full">

                    <input type="text" name="materiel_type" placeholder="Type de matériel" onChange={handleChange} />

                </div>
                
                
                <div className="full">

                    <input type="text" name="materiel_name" placeholder="Nom du matériel ou de l'ensemble de metériaux" onChange={handleChange} />

                </div>

                
                <div className="full">
                    <textarea name="materiel_description" id="" cols="30" rows="10" placeholder="Description de vos attentes" onChange={handleChange}></textarea>

                </div>
                {/* <button >Ajouter un matériel</button> */}


                <div className="full">
                    <label for="check_other">
                        <input type="checkbox" name="check_other" onChange={handleChange} />
                        Autre
                    </label>
                </div>
                <div className="full">
                    <textarea name="other_description" id="" cols="30" rows="10" placeholder="Si vous voulez autre chose, faites nous le savoir" onChange={handleChange}></textarea>

                </div>


                <div className="full">
                    <label for="check_ticket">
                        <input type="checkbox" name="check_ticket" onChange={handleChange} />
                        Créez des tickets
                    </label>
                </div>

                <div className="">
                Vérifiez que les informations que vous avez renseignées sont correctes et soumettez votre demande
            </div>

                <button >Envoyer</button>
            </form>
        </div>
    )
}
