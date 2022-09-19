import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// btn
import Button from 'react-bootstrap/Button';

export default function CreateEvent() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/test/api-php-natif/api/event/create.php', inputs).then(function (response) {
            console.log(response.data);
            navigate('/event/:id/demande');
        });

    }
    return (
        <div>
            <h1>créez votre évènement</h1>
            <form onSubmit={handleSubmit}>



                <div className="full">
                    <label for="name">
                        Nom de l’évènement
                        <input type="text" name="name" onChange={handleChange} />
                    </label>
                </div>


                <div className="full">
                    <div>
                    </div>
                    <label for="location">
                        <h2>Lieu</h2>
                        <span>Si vous comptez nous confier la recherche du lieu, laissez vide cet champ</span>

                        <input type="text" name="location" onChange={handleChange} />
                    </label>
                </div>


                <div className="full">
                    <div className="half">
                        <label for="start_date">
                            Date de debut
                            <input type="date" name="start_date" onChange={handleChange} />
                        </label>
                    </div>
                    <div className="half">
                        <label for="start_houre">
                            Heure de debut
                            <input type="time" name="start_houre" onChange={handleChange} />
                        </label>
                    </div>
                </div>


                <div className="full">
                    <div class="half">
                        <label for="end_date">
                            Date de fin
                            <input type="date" name="end_date" onChange={handleChange} />
                        </label>
                    </div>
                    <div className="half">
                        <label for="end_houre">
                            Heure de fin
                            <input type="time" name="end_houre" onChange={handleChange} />
                        </label>
                    </div>
                </div>


                <div className="full">
                    <label for="type">
                        Type d’évènement
                        <input type="text" name="type" onChange={handleChange} />
                    </label>
                </div>


                <div className="full">
                    <label for="creator_id">
                        créé par
                        <input type="text" name="creator_id" onChange={handleChange} />
                    </label>
                </div>


                <div className="full">
                    <label for="organisation_id">
                        organisation
                        <input type="text" name="organisation_id" onChange={handleChange} />
                    </label>
                </div>


                <div className="full">
                    <label for="nature">
                        Nature de l’évènement
                        <select name="nature" onChange={handleChange}>
                            <option value="">nature</option>
                            <option value="physique">Physique</option>
                            <option value="en ligne">En ligne</option>
                            <option value="les deux">Les deux</option>
                        </select>
                    </label>
                </div>


                <div className="full">
                    <label for="description">
                        Description de l’évènement
                        <textarea name="description" id="" cols="30" rows="10" placeholder="description ..." onChange={handleChange}></textarea>

                    </label>
                </div>

                <button >Envoyer</button>
            </form>
        </div>
    )
}
