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

    const hideArrows = length <= 1;
    const hideIndex = length <= 1;

return(
        <div className='divLodgingImg'>
            <img className='lodgingImg' src={slides[current]} alt=""/>
            <img className='nextArrow' src={nextArrow} alt="Flèche de navigation" onClick={nextSlide} style={{display: hideArrows ? 'none' : 'block'}}/>
            <img className='prevArrow' src={prevArrow} alt="Flèche de navigation" onClick={prevSlide} style={{display: hideArrows ? 'none' : 'block'}}/>
            <div className='currentIndex'style={{display: hideIndex ? 'none' : 'block'}}>
                {current + 1}/{length}
            </div>
        </div>
    )
}

export default Slider