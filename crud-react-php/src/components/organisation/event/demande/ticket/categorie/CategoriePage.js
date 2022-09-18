import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';


export default function Organisateur() {


    return (
        <div>
            <h1>Organisateur</h1>
          <Button href="user/inscription" variant="primary">Creer un profil</Button>

            <h1>En quoi nous pouvons vous aider</h1>
            <p>
                Vous organisez une conférence, une formation, un concert, un match de foot ou tout autre évènement
                ; nous voyons simplement de quoi vous disposez et nous vous proposons le reste selon vos désirs.
            </p>
            <p>
                Pour commencer vous devez créer votre profil sur notre site, en suite nous allons vous suivre étape par
                étape jusqu’à votre satisfaction.
            </p>

            <h1>Comment est-ce-que nous le faisons concrètement ?</h1>
            <p>
                Nous proposons un ensemble d’éléments nécessaire pour un évènement et vous choisissez ce qui
                vous est nécessaire
            </p>

            <section className="organisateur-section organisateur-section-1">
                <div className="organisateur-section-1-content">
                    <div className="organisateur-section-1-img">
                    <img src="" alt="" />
                    </div>
                    <div className="organisateur-section-1-text">
                        <h2>Un lieu pour votre évènement</h2>
                        <p>
                            Dans l’organisation de votre évènement quel
                            qu’il soit, vous ne parvenez pas à trouver un
                            endroit confortable, pas de soucis nous nous
                            chargeons de vous trouver l’endroit exact qu’il
                            vous faut. une salle de conférence par
                            exemple.
                        </p>
          <Button href="user/inscription" variant="primary">Demander un devis</Button>

                    </div>
                </div>
            </section>


        </div>
    )
}
