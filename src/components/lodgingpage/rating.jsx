import React, {useState} from "react";
import lodging from "../../pages/lodging/lodging.css"

import starLogoR from '../../assets/Star_red.svg'
import starLogoG from '../../assets/Star_gray.svg'

function Rating({rating}) {

    const range = [1, 2, 3, 4, 5];

    const listRate = range.map((rate) =>
        rating >= rate ? (
            <img key={rate.toString()} src={starLogoR} alt="Étoile de notation" className='starLogo'/>) : (
            <img key={rate.toString()} src={starLogoG} alt="Étoile de notation" className='starLogo'/>)
    );

    return (
        <div className='starsContainer'>
            {listRate}
        </div>
    )
}

export default Rating