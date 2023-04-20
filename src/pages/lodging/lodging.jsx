import React from "react";
import logements from '../../logements.json'
import {useParams} from "react-router-dom";
import lodging from './lodging.css'

import Slider from '../../components/lodgingpage/slider'
import Hosts from "../../components/lodgingpage/hosts";
import Tags from "../../components/lodgingpage/tags";
import Rating from "../../components/lodgingpage/rating";

function Lodging() {

    const {id} = useParams();
    const logement = logements.find(l => l.id === id);

    const {title, cover, pictures, description, host, rating, location, equipments, tags} = logement;

    return (
        <section>
            <Slider slides={pictures}/>
            <div>
                <h2>{title}</h2>
                <p>{location}</p>
            </div>
            <div className='hostContainer'>
                <Hosts host={host}/>
            </div>
            <div>
                <Tags tags={tags}/>
            </div>
                <Rating rating={rating}/>
        </section>
    )
}


export default Lodging