import React from "react";
import logements from '../../logements.json'
import {useParams} from "react-router-dom";
import lodging from './lodging.css'

import starImg from "../../assets/Star.svg"

import Slider from '../../components/lodgingpage/slider'
import Hosts from "../../components/lodgingpage/hosts";
import Tags from "../../components/lodgingpage/tags";

function Lodging() {

    const {id} = useParams();
    const logement = logements.find(l => l.id === id);

    const {title, cover, pictures, description, host, rating, location, equipments, tags} = logement;

    // const rating = logement.rating
    // const range = [1,2,3,4,5];
    // const listRating = range.map((rate, ) => (
    //     <span key={rate} className={} />
    // ))

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
            <div className='starContainer'>

            </div>
        </section>
    )
}


export default Lodging