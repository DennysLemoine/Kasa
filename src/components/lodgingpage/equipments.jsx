import React from "react";
import {useState} from "react";
import Collapse from 'react-collapse';

import lodging from "../../pages/lodging/lodging.css"

import arrowImg from "../../assets/Arrow.svg";

function Equipments({equipment}) {

    const [showDiv, setShowDiv] = useState([]);
    const [rotateImg, setRotateImg] = useState([]);
    const [open, setOpen] = useState([]);

    const toggleDiv = (index) => {
        const newShowDiv = [...showDiv];
        newShowDiv[index] = !newShowDiv[index];
        setShowDiv(newShowDiv);
    };

    const rotateImage = (index) => {
        const newRotateImg = [...rotateImg];
        newRotateImg[index] = !newRotateImg[index];
        setRotateImg(newRotateImg)
    };

    const openCollapse = (index) => {
        const newOpenCollapse = [...open];
        newOpenCollapse[index] = !newOpenCollapse[index];
        setOpen(newOpenCollapse);
    }

    const listEquipments = equipment.map((equipment, index) =>
        <li key={index}>{equipment}</li>
    )

    return (
        <div>
            <button className={`scrollContainer ${rotateImg[0] ? 'rotate' : ''}`} onClick={() => {
                toggleDiv(0);
                rotateImage(0);
                openCollapse(0);
            }} style={{marginBottom: showDiv[0] ? 0 : "20px"}}>
                {open[0] ? 'Équipements' : 'Équipements'}
                <img className='arrowNav' src={arrowImg}
                     alt="Flèche de navigation pour ouvrir/fermer la zone de texte"/>
            </button>
            <Collapse isOpened={open[0]}>
                <ul className='scrollContent'>
                    {listEquipments}
                </ul>
            </Collapse>
        </div>
    )
}

export default Equipments