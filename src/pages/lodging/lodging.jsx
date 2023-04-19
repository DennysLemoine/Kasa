import React from "react";
import logements from '../../logements.json'
import {useParams} from "react-router-dom";
import lodging from './lodging.css'

import starImg from "../../assets/Star.svg"

import Slider from '../../components/lodgingpage/slider'

function Lodging() {

    const {id} = useParams();
    const logement = logements.find(l => l.id === id);

    const {title, cover, pictures, description, host, rating, location, equipments, tags} = logement;

    // const hostName = logement.host.name;
    // const hostNameArray = hostName.split(" ");
    // const hostPicture = logement.host.picture;

    // const tags = logement.tags;
    // const listTags = tags.map((tag, index) =>
    //     <li className='listTags' key={index}>
    //         {tag}
    //     </li>
    // );

    // const rating = logement.rating
    // const range = [1,2,3,4,5];
    // const listRating = range.map((rate, ) => (
    //     <span key={rate} className={} />
    // ))

    return (
        <section>
            <Slider slides={pictures}/>
            <div>
                {/*<h2>{logement.title}</h2>*/}
                {/*<p>{logement.location}</p>*/}
            </div>
            <div className='hostContainer'>
                {/*{hostNameArray[0]}<br/>*/}
                {/*{hostNameArray[1]}*/}
                {/*<img className='hostPicture' src={hostPicture} alt={hostPicture}/>*/}
            </div>
            <div>
                <ul>
                    {/*{listTags}*/}
                </ul>
            </div>
            <div className='starContainer'>

            </div>
        </section>
    )
}


export default Lodging