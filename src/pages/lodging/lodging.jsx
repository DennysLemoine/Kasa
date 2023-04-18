import logements from '../../logements.json'
import {useParams} from "react-router-dom";

import lodging from './lodging.css'

function Lodging() {
    const {id} = useParams();
    const logement = logements.find(l => l.id === id);
    const host = [logement.host];

    return(
        <section>
            <div>
                <img className='lodgingImg' src={logement.cover} alt=""/>
            </div>
            <div>
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
                <div>
                    {host.map}
                </div>
            </div>
        </section>
    )
}


export default Lodging