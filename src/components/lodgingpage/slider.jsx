import React, {useState} from "react";
import lodging from "../../pages/lodging/lodging.css"

import nextArrow from '../../assets/Next_Arrow.svg'
import prevArrow from '../../assets/Previous_Arrow.svg'

function Slider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return(
        <div className='divLodgingImg'>
            <img className='lodgingImg' src={slides[current]} alt=""/>
            <img className='nextArrow' src={nextArrow} alt="" onClick={nextSlide}/>
            <img className='prevArrow' src={prevArrow} alt="" onClick={prevSlide}/>
        </div>
    )
}

export default Slider