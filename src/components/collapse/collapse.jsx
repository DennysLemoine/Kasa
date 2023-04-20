import React from "react";
import {useState} from "react";
import collapse from "./collapse.css"

import arrowImg from '../../assets/Arrow.svg'

function CollapseContent(props) {

    const [isOpened, setIsOpened] = useState(false);

    function toggle(e) {
        setIsOpened(isOpened => !isOpened);

        const arrowImg = e.target.lastChild;
        !arrowImg.classList.contains("rotate")?arrowImg.classList.add("rotate"):arrowImg.classList.remove("rotate");
    }

    return(
        <div className='sectionScroll'>
            <div className='scrollContainer' onClick={toggle}>
                <h2 className='titleCollapse'>{props.title}</h2>
                <img className='arrowNav' src={arrowImg}
                     alt="Flèche de navigation pour ouvrir/fermer la zone de texte"/>
            </div>
            {isOpened && (
                <p className='scrollContent'>{ props.content }</p>
            )}
        </div>
    )

}
export default CollapseContent