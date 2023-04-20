import React from "react";
import logements from '../../logements.json'
import {useParams} from "react-router-dom";
import lodging from './lodging.css'

import Slider from '../../components/lodgingpage/slider'
import Hosts from "../../components/lodgingpage/hosts";
import Tags from "../../components/lodgingpage/tags";
import Rating from "../../components/lodgingpage/rating";
import Description from "../../components/lodgingpage/descriptions";
import Equipments from "../../components/lodgingpage/equipments";

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
            <Hosts host={host}/>
            <div>
                <Tags tags={tags}/>
            </div>
            <Rating rating={rating}/>
            <div>
                <Description description={description}/>
                <Equipments equipment={equipments}/>
            </div>
        </section>
    )
}


export default Lodging