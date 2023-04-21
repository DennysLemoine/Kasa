import React from "react";
import {useState} from "react";
import collapse from "./collapse.css"

import arrowImg from '../../assets/Arrow.svg'

function CollapseContent(props) {

    const [isOpened, setIsOpened] = useState(false);

    function toggle(e) {
        setIsOpened(isOpened => !isOpened);
    }

    const arrowClassName = isOpened ? 'arrowNav rotate' : 'arrowNav';

    return(
        <>
            <div className='scrollContainer' onClick={toggle}>
                <h2 className='titleCollapse'>{props.title}</h2>
                <div className={arrowClassName}>
                    <img src={arrowImg} alt="Flèche de navigation pour ouvrir/fermer la zone de texte" />
                </div>
            </div>
            {isOpened && (
                <div className='scrollContent'>{ props.content }</div>
            )}
        </>
    )

}
export default CollapseContent