import logements from '../../logements.json'
import {useParams} from "react-router-dom";

import lodging from './lodging.css'

function Lodging() {
    const {id} = useParams();

    return(
        <div className='lodgingImg'>
            <img src={logements.cover} alt=""/>
            <h2 className="cardTitle">{logements.title}</h2>
        </div>
    )
}


export default Lodging