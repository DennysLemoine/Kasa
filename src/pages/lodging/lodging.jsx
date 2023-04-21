import React from "react";
import logements from '../../logements.json'
import {useParams} from "react-router-dom";
import lodging from './lodging.css'

import CollapseContent from '../../components/collapse/collapse'
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
            <div className='listingContainer'>
                <div>
                    <h2 className='lodgingTitle'>{title}</h2>
                    <p className='lodgingP'>{location}</p>
                    <Tags tags={tags}/>
                </div>
                <div>
                    <Hosts host={host}/>
                    <Rating rating={rating}/>
                </div>
            </div>
            <div className='detailsContainer'>
                <div>
                    <CollapseContent title='Description' content={description} />
                </div>
                <div>
                    <CollapseContent title='Équipements' content=
                        {
                        <ul>
                            {equipments.map((equipment) => <li key={equipment}>{equipment}</li>)}
                        </ul>
                        }
                    />
                </div>
            </div>
        </section>
    )
}


export default Lodging